
export interface EmailData {
  to: string;
  subject: string;
  body: string;
  type: 'password-reset' | 'notification' | 'report' | 'general';
}

class EmailService {
  private emailQueue: EmailData[] = [];

  async sendEmail(emailData: EmailData): Promise<boolean> {
    try {
      // Simulate email sending
      console.log('📧 Sending email:', emailData);
      
      // Add to queue for tracking
      this.emailQueue.push({
        ...emailData,
        body: `${emailData.body}\n\n---\nSent from Department Monitor at ${new Date().toISOString()}`
      });

      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store in localStorage for persistence
      const existingEmails = JSON.parse(localStorage.getItem('sentEmails') || '[]');
      existingEmails.push({
        ...emailData,
        timestamp: new Date().toISOString(),
        status: 'sent'
      });
      localStorage.setItem('sentEmails', JSON.stringify(existingEmails));

      return true;
    } catch (error) {
      console.error('Failed to send email:', error);
      return false;
    }
  }

  async sendPasswordResetEmail(email: string, newPassword: string): Promise<boolean> {
    return this.sendEmail({
      to: email,
      subject: 'Password Reset - Department Monitor',
      body: `Your password has been reset. Your new temporary password is: ${newPassword}\n\nPlease log in and change this password immediately for security.`,
      type: 'password-reset'
    });
  }

  async sendNotificationEmail(email: string, title: string, message: string): Promise<boolean> {
    return this.sendEmail({
      to: email,
      subject: `Notification: ${title}`,
      body: message,
      type: 'notification'
    });
  }

  async sendReportEmail(email: string, reportName: string, reportData: string): Promise<boolean> {
    return this.sendEmail({
      to: email,
      subject: `Report: ${reportName}`,
      body: `Please find your requested report below:\n\n${reportData}`,
      type: 'report'
    });
  }

  getSentEmails(): EmailData[] {
    return JSON.parse(localStorage.getItem('sentEmails') || '[]');
  }
}

export const emailService = new EmailService();
