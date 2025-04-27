
export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  access: 'public' | 'private';
  imageUrl?: string;
  status?: string;
  uploader?: string;
  importance?: 'high' | 'medium' | 'low';
  dueDate?: string;
  courseId?: string;
  courseName?: string;
  attachments?: Attachment[];
  links?: ResourceLink[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Attachment {
  id: string;
  name: string;
  type: string;
  url: string;
  size: number;
}

export interface ResourceLink {
  id: string;
  title: string;
  url: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role: 'student' | 'teacher' | 'admin';
  courses: string[];
  resources: string[];
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate: Date;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'in-progress' | 'completed';
  assigneeId?: string;
  categoryId?: string;
  reminderTime?: Date;
}
