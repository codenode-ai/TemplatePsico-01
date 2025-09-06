import type { VercelRequest, VercelResponse } from '@vercel/node';
import { insertContactSubmissionSchema } from '../shared/schema';
import { storage } from '../server/storage';
import { z } from 'zod';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const validatedData = insertContactSubmissionSchema.parse(req.body);
    const submission = await storage.createContactSubmission(validatedData);
    res.status(200).json({ success: true, message: 'Mensagem enviada com sucesso!', id: submission.id });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ 
        success: false, 
        message: 'Dados inválidos', 
        errors: error.errors 
      });
    } else {
      console.error('Error submitting contact form:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Erro interno do servidor. Tente novamente mais tarde.' 
      });
    }
  }
}