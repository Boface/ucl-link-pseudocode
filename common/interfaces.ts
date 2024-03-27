// Authentication
export interface AuthenticationInterface {
  register(user: User): Promise<void>;
  login(credentials: Credentials): Promise<AuthToken>;
  logout(token: AuthToken): Promise<void>;
  authenticate(token: AuthToken): Promise<User>;
  refreshToken(token: AuthToken): Promise<AuthToken>;
}

// User
export interface UserInterface {
  profile: ProfileInterface;
  settings: SettingsInterface;
  matches: MatchInterface[];
  groups: GroupInterface[];
  events: EventInterface[];
  chats: ChatInterface[];
  feedbacks: FeedbackInterface[];
}

// Profile
export interface ProfileInterface {
  id: string;
  userId: string;
  name: string;
  bio: string;
  interests: string[];
  picture: string;
  major: string;
  year: number;
  updateProfile(profile: Partial<ProfileInterface>): Promise<void>;
}

// Settings
export interface SettingsInterface {
  id: string;
  userId: string;
  language: string;
  notificationPreferences: NotificationPreferencesInterface;
  privacySettings: PrivacySettingsInterface;
  queuePreference: string;
  updateSettings(settings: Partial<SettingsInterface>): Promise<void>;
}

// Notification Preferences
export interface NotificationPreferencesInterface {
  id: string;
  userId: string;
  emailNotifications: boolean;
  pushNotifications: boolean;
  updateNotificationPreferences(
    preferences: Partial<NotificationPreferencesInterface>
  ): Promise<void>;
}

// Privacy Settings
export interface PrivacySettingsInterface {
  id: string;
  userId: string;
  publicProfile: boolean;
  shareContactInfo: boolean;
  updatePrivacySettings(
    settings: Partial<PrivacySettingsInterface>
  ): Promise<void>;
}

// Match
export interface MatchInterface {
  id: string;
  userId: string;
  matchedUserId: string;
  status: string;
  updateStatus(status: string): Promise<void>;
}

// Event
export interface EventInterface {
  id: string;
  title: string;
  description: string;
  startDateTime: Date;
  endDateTime: Date;
  location: string;
  organizerId: string;
  category: string;
  isPublic: boolean;
  isPrivate: boolean;
  groupVisibility: string[];
  images: string[];
  videos: string[];
  links: string[];
  contacts: string[];
  addAttendee(userId: string): Promise<void>;
  removeAttendee(userId: string): Promise<void>;
  updateEvent(event: Partial<EventInterface>): Promise<void>;
  cancelEvent(): Promise<void>;
}

// Group
export interface GroupInterface {
  id: string;
  name: string;
  description: string;
  ownerId: string;
  chat: GroupChatInterface;
  addMember(userId: string): Promise<void>;
  removeMember(userId: string): Promise<void>;
  updateGroup(group: Partial<GroupInterface>): Promise<void>;
}

// Group Chat
export interface GroupChatInterface {
  id: string;
  groupId: string;
  messages: MessageInterface[];
  sendMessage(senderId: string, content: string): Promise<void>;
  shareImage(senderId: string, imageUrl: string): Promise<void>;
  sendVoiceMessage(senderId: string, audioUrl: string): Promise<void>;
}

// Chat
export interface ChatInterface {
  id: string;
  participants: string[];
  messages: MessageInterface[];
  sendMessage(senderId: string, content: string): Promise<void>;
  shareImage(senderId: string, imageUrl: string): Promise<void>;
  sendVoiceMessage(senderId: string, audioUrl: string): Promise<void>;
}

// Message
export interface MessageInterface {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
  type: string;
}

// Feedback
export interface FeedbackInterface {
  id: string;
  userId: string;
  message: string;
  timestamp: Date;
  provideFeedback(userId: string, message: string): Promise<void>;
}
