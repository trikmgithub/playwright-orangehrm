export class DataGenerator {
  
  static randomString(length: number = 10): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  
  static randomNumber(min: number = 1000, max: number = 9999): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  
  static randomEmail(domain: string = 'test.com'): string {
    return `user_${this.randomString(8).toLowerCase()}@${domain}`;
  }

  
  static randomEmployeeId(): string {
    return `EMP${this.randomNumber(10000, 99999)}`;
  }

  
  static randomPhoneNumber(): string {
    return `0${this.randomNumber(100000000, 999999999)}`;
  }

  
  static randomFullName(): { firstName: string; lastName: string } {
    const firstNames = ['John', 'Jane', 'Michael', 'Sarah', 'David', 'Emily', 'Robert', 'Lisa', 'James', 'Maria'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Martinez', 'Lopez'];
    
    return {
      firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
      lastName: lastNames[Math.floor(Math.random() * lastNames.length)]
    };
  }

  
  static randomDate(start: Date = new Date(1990, 0, 1), end: Date = new Date()): string {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0]; // YYYY-MM-DD
  }

  
  static uniqueId(prefix: string = ''): string {
    return `${prefix}${Date.now()}_${this.randomNumber(100, 999)}`;
  }
}
