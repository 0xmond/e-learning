export enum UserRoles {
  ADMIN = 'admin',
  STUDENT = 'student',
  INSTRUCTOR = 'instructor',
}

export enum LessonType {
  VIDEO = 'video',
  ARTICLE = 'article',
  QUIZ = 'quiz',
  ASSIGNMENT = 'assignment',
}

const getMessages = (entity: string) => {
  return {
    notFound: `${entity} is not found`,
    alreadyExist: `${entity} is already exist`,
    updatedSuccessfully: `${entity} is updated successfully`,
    archivedSuccessfully: `${entity} is archived successfully`,
    deletedSuccessfully: `${entity} is deleted successfully`,
    removedSuccessfully: `${entity} is removed successfully`,
    createdSuccessfully: `${entity} is created successfully`,
  };
};

export const Messages = {
  user: {
    ...getMessages('User'),
    emailConfirmed: 'Email confirmed successfully',
  },
  otp: { isInvalid: 'Invalid OTP' },
  email: { isSent: 'Email is sent successfully. Please check your inbox' },
  course: getMessages('Course'),
};

export enum OTP_TYPE {
  SEND_EMAIL = 'Send-email',
  FORGET_PASSWORD = 'Forget-password',
}

export enum EMAIL_SUBJECTS {
  EMAIL_CONFIRMATION = 'Email Confirmation',
  RESET_PASSWORD = 'Reset Password',
}

export enum CourseLevels {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
}
