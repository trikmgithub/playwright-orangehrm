
export class DateUtil {
  
  static getCurrentDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  
  static getDateWithOffset(offsetDays: number): string {
    const date = new Date();
    date.setDate(date.getDate() + offsetDays);
    return date.toISOString().split('T')[0];
  }

  
  static formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  
  static parseDate(dateString: string): Date {
    return new Date(dateString);
  }

  
  static getFirstDayOfMonth(): string {
    const date = new Date();
    return this.formatDate(new Date(date.getFullYear(), date.getMonth(), 1));
  }

  
  static getLastDayOfMonth(): string {
    const date = new Date();
    return this.formatDate(new Date(date.getFullYear(), date.getMonth() + 1, 0));
  }

  static getYesterday(): string {
    return this.getDateWithOffset(-1);
  }

  static getTomorrow(): string {
    return this.getDateWithOffset(1);
  }

  static getTimestamp(): string {
    return Date.now().toString();
  }

  static isValidDate(dateString: string): boolean {
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date.getTime());
  }

  static getAge(dateOfBirth: string): number {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  }
}
