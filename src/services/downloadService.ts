
export interface DownloadData {
  filename: string;
  content: string;
  type: 'json' | 'csv' | 'txt' | 'pdf';
}

class DownloadService {
  downloadFile(data: DownloadData): void {
    const { filename, content, type } = data;
    
    let mimeType: string;
    let processedContent: string;

    switch (type) {
      case 'json':
        mimeType = 'application/json';
        processedContent = typeof content === 'string' ? content : JSON.stringify(content, null, 2);
        break;
      case 'csv':
        mimeType = 'text/csv';
        processedContent = content;
        break;
      case 'txt':
        mimeType = 'text/plain';
        processedContent = content;
        break;
      case 'pdf':
        mimeType = 'application/pdf';
        processedContent = content;
        break;
      default:
        mimeType = 'text/plain';
        processedContent = content;
    }

    const blob = new Blob([processedContent], { type: mimeType });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${filename}.${type}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the URL object
    URL.revokeObjectURL(url);

    // Track download
    const downloads = JSON.parse(localStorage.getItem('downloads') || '[]');
    downloads.push({
      filename: `${filename}.${type}`,
      timestamp: new Date().toISOString(),
      size: blob.size
    });
    localStorage.setItem('downloads', JSON.stringify(downloads));
  }

  downloadUserData(user: any): void {
    this.downloadFile({
      filename: `user-data-${user.username}`,
      content: JSON.stringify(user, null, 2),
      type: 'json'
    });
  }

  downloadSystemReport(): void {
    const reportData = {
      timestamp: new Date().toISOString(),
      totalUsers: JSON.parse(localStorage.getItem('userDatabase') || '[]').length,
      sentEmails: JSON.parse(localStorage.getItem('sentEmails') || '[]').length,
      downloads: JSON.parse(localStorage.getItem('downloads') || '[]').length,
      systemStatus: 'operational'
    };

    this.downloadFile({
      filename: 'system-report',
      content: JSON.stringify(reportData, null, 2),
      type: 'json'
    });
  }

  downloadCSVReport(data: any[], filename: string): void {
    if (data.length === 0) return;

    const headers = Object.keys(data[0]).join(',');
    const rows = data.map(item => 
      Object.values(item).map(value => 
        typeof value === 'string' ? `"${value}"` : value
      ).join(',')
    );
    
    const csvContent = [headers, ...rows].join('\n');
    
    this.downloadFile({
      filename,
      content: csvContent,
      type: 'csv'
    });
  }

  getDownloadHistory(): any[] {
    return JSON.parse(localStorage.getItem('downloads') || '[]');
  }
}

export const downloadService = new DownloadService();
