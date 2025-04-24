import { Testimonio } from '@/types/testimonio';
import fs from 'fs/promises';
import path from 'path';;

export async function getInfoTestimonios(): Promise<Testimonio[]> {
    const filePath = path.join(process.cwd(), 'data', 'testimonios.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(jsonData);
  }