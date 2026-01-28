import fs from 'fs';
import path from 'path';


export class FileUtil {

  static readJson<T>(filePath: string): T {
    const absolutePath = path.resolve(filePath);
    const data = fs.readFileSync(absolutePath, 'utf-8');
    return JSON.parse(data);
  }


  static writeJson<T>(filePath: string, data: T): void {
    const absolutePath = path.resolve(filePath);
    const dir = path.dirname(absolutePath);
    
    // Create directory if not exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(absolutePath, JSON.stringify(data, null, 2), 'utf-8');
  }


  static exists(filePath: string): boolean {
    return fs.existsSync(path.resolve(filePath));
  }


  static delete(filePath: string): void {
    const absolutePath = path.resolve(filePath);
    if (fs.existsSync(absolutePath)) {
      fs.unlinkSync(absolutePath);
    }
  }


  static readCsv(filePath: string): string[][] {
    const content = fs.readFileSync(path.resolve(filePath), 'utf-8');
    return content.split('\n').map(line => line.split(',').map(cell => cell.trim()));
  }


  static createDir(dirPath: string): void {
    const absolutePath = path.resolve(dirPath);
    if (!fs.existsSync(absolutePath)) {
      fs.mkdirSync(absolutePath, { recursive: true });
    }
  }


  static getExtension(filePath: string): string {
    return path.extname(filePath);
  }


  static getFilenameWithoutExt(filePath: string): string {
    return path.basename(filePath, path.extname(filePath));
  }
}
