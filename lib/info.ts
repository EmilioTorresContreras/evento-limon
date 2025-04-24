import { InfoItem } from '@/types/info';
import fs from 'fs/promises';
import path from 'path';;

export async function getInfoFeatures(): Promise<InfoItem[]> {
    const filePath = path.join(process.cwd(), 'data', 'info.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(jsonData);
  }