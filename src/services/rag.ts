import CARGOS_DATA from '../data/cargosData';
import GLOSARIO_DATA from '../data/glosarioData';
import FAQ_DATA from '../data/faqData';

// Contexto completo para el System Prompt de Groq
const SYSTEM_PROMPT_CONTEXT = `
Eres NovaBot, el asistente virtual oficial de ConectaNova Telecom S.A.S.
Tu objetivo es ser un consultor de talento y arquitectura organizacional cálido, pedagógico, altamente profesional y conversacional.

INSTRUCCIONES DE INTERACCIÓN Y ESTILO:
1. Saluda de forma amable y cercana.
2. Responde en lenguaje natural, fluido y estructurado en párrafos breves o viñetas claras. Evita sonar como un robot o un manual rígido.
3. Basa tus respuestas rigurosamente en la base de conocimiento de la empresa que se te proporciona a continuación.
4. Si la consulta involucra un cargo, menciona sus funciones principales, indicadores (KPIs) clave y sus límites/dependencias si aplica.
5. Si no encuentras la respuesta exacta en el contexto, sé honesto, responde amablemente indicando qué información sí tienes disponible y ofrece canalizar la duda.
6. Cierra tus respuestas con una pregunta o invitación conversacional para seguir ayudando al usuario (ej. "¿Te gustaría que profundicemos en las competencias de este rol o que lo comparemos con otro?").

BASE DE CONOCIMIENTO DE CONECTANOVA TELECOM S.A.S.:
${JSON.stringify(CARGOS_DATA, null, 2)}

GLOSARIO DE TÉRMINOS:
${JSON.stringify(GLOSARIO_DATA, null, 2)}

PREGUNTAS FRECUENTES:
${JSON.stringify(FAQ_DATA, null, 2)}
`;

export async function responderConsulta(mensajeUsuario: string): Promise<string> {
  const apiKey = (import.meta as any).env?.VITE_GROQ_API_KEY;

  if (apiKey) {
    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT_CONTEXT },
            { role: 'user', content: mensajeUsuario }
          ],
          temperature: 0.6,
          max_tokens: 1000,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const respuestaIA = data.choices?.[0]?.message?.content;
        if (respuestaIA) return respuestaIA;
      }
    } catch (error) {
      console.warn('Falló la llamada a la API de Groq, recurriendo al motor local.', error);
    }
  }

  return generarRespuestaLocal(mensajeUsuario);
}

// Alias de exportación para compatibilidad con Chat.tsx y otros componentes
export const consultarRAG = responderConsulta;
export const queryRAG = responderConsulta;

function generarRespuestaLocal(query: string): string {
  const q = query.toLowerCase();
  
  const cargoEncontrado = (CARGOS_DATA as any[]).find((c: any) => 
    (c.nombre && c.nombre.toLowerCase().includes(q)) || 
    (c.area && c.area.toLowerCase().includes(q))
  );

  if (cargoEncontrado) {
    const kpisTexto = Array.isArray(cargoEncontrado.kpis) 
      ? cargoEncontrado.kpis.join(', ') 
      : 'No especificados';

    return `¡Hola! Con gusto te brindo información sobre el rol de **${cargoEncontrado.nombre}** en el área de **${cargoEncontrado.area}**.\n\n` +
           `📌 **Propósito principal:** ${cargoEncontrado.proposito || 'No especificado'}\n\n` +
           `🎯 **Indicadores clave (KPIs):** ${kpisTexto}.\n\n` +
           `¿Te gustaría conocer más detalles sobre las responsabilidades o requisitos de este cargo?`;
  }

  const faq = (FAQ_DATA as any[]).find((f: any) => f.pregunta && f.pregunta.toLowerCase().includes(q));
  if (faq) {
    return `¡Hola! Con respecto a tu duda sobre "${faq.pregunta}":\n\n${faq.respuesta}\n\n¿Hay algo más en lo que te pueda colaborar?`;
  }

  return `¡Hola! Soy NovaBot. Puedo ayudarte con información sobre cualquiera de los 24 cargos, términos técnicos y procesos de ConectaNova Telecom S.A.S.\n\n` +
         `¿Podrías especificarme sobre qué rol o tema deseas consultar?`;
}
