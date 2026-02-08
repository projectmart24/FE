const STORAGE_KEYS = {
  complaints: 'mockComplaints',
  users: 'mockUsers',
  admins: 'mockAdmins',
  tags: 'mockTags',
  comments: 'mockComments',
  smsPrefs: 'mockSmsPrefs'
};

const seedComplaints = [
  {
    id: 'cmp-101',
    ticket_id: 'CMP20260208A1B2',
    title: 'Hostel WiFi keeps disconnecting',
    description: 'The WiFi in Block C drops every 10–15 minutes. This affects online classes and assignments.',
    status: 'in_progress',
    priority: 'high',
    category: 'Technical',
    created_at: '2026-02-01T09:10:00Z',
    resolved_at: null,
    admin_response: 'Network team is diagnosing the access points in Block C. Expect an update by Friday.',
    user_id: 'u-1',
    attachments: [
      {
        id: 'att-1',
        file_type: 'image/png',
        file_url: 'https://via.placeholder.com/300x300.png?text=WiFi+Logs',
        original_filename: 'wifi-logs.png'
      }
    ],
    feedback: null
  },
  {
    id: 'cmp-102',
    ticket_id: 'CMP20260206C3D4',
    title: 'Cafeteria food quality issue',
    description: 'Food served at lunch was cold and undercooked. Several students reported this.',
    status: 'pending',
    priority: 'medium',
    category: 'Hostel/Mess',
    created_at: '2026-02-06T12:25:00Z',
    resolved_at: null,
    admin_response: '',
    user_id: 'u-2',
    attachments: [],
    feedback: null
  },
  {
    id: 'cmp-103',
    ticket_id: 'CMP20260130E5F6',
    title: 'Library access card not working',
    description: 'My library card is not being recognized at the entry gate since yesterday.',
    status: 'resolved',
    priority: 'low',
    category: 'Academic',
    created_at: '2026-01-30T08:40:00Z',
    resolved_at: '2026-02-02T16:10:00Z',
    admin_response: 'Card has been reactivated and tested. Please try again.',
    user_id: 'u-1',
    attachments: [],
    feedback: {
      rating: 5,
      feedback_text: 'Quick fix, thanks!'
    }
  },
  {
    id: 'cmp-104',
    ticket_id: 'CMP20260125G7H8',
    title: 'Lab AC not functioning',
    description: 'The AC in the main lab is broken and the room gets too hot during sessions.',
    status: 'in_progress',
    priority: 'medium',
    category: 'Maintenance',
    created_at: '2026-01-25T11:15:00Z',
    resolved_at: null,
    admin_response: 'Maintenance team has ordered replacement parts.',
    user_id: 'u-3',
    attachments: [
      {
        id: 'att-2',
        file_type: 'image/jpeg',
        file_url: 'https://via.placeholder.com/300x300.jpg?text=Lab+AC',
        original_filename: 'lab-ac.jpg'
      }
    ],
    feedback: null
  },
  {
    id: 'cmp-105',
    ticket_id: 'CMP20260120J9K0',
    title: 'Projector flickering in lecture hall',
    description: 'The projector in Hall B flickers and sometimes turns off during lectures.',
    status: 'closed',
    priority: 'high',
    category: 'Maintenance',
    created_at: '2026-01-20T09:05:00Z',
    resolved_at: '2026-01-23T14:50:00Z',
    admin_response: 'Projector replaced with a new unit. Issue should be resolved.',
    user_id: 'u-2',
    attachments: [],
    feedback: {
      rating: 4,
      feedback_text: 'Resolved quickly, but please check spare units regularly.'
    }
  },
  {
    id: 'cmp-106',
    ticket_id: 'CMP20260118L1M2',
    title: 'Exam form submission portal down',
    description: 'The exam form submission portal shows a 500 error since morning.',
    status: 'resolved',
    priority: 'urgent',
    category: 'Technical',
    created_at: '2026-01-18T07:30:00Z',
    resolved_at: '2026-01-18T12:20:00Z',
    admin_response: 'Server issue fixed and portal is now stable.',
    user_id: 'u-1',
    attachments: [],
    feedback: null
  },
  {
    id: 'cmp-107',
    ticket_id: 'CMP20260112N3P4',
    title: 'Noise in hostel common room',
    description: 'Loud noise in the common room after 11 PM affecting rest.',
    status: 'pending',
    priority: 'low',
    category: 'Hostel/Mess',
    created_at: '2026-01-12T22:10:00Z',
    resolved_at: null,
    admin_response: '',
    user_id: 'u-3',
    attachments: [],
    feedback: null
  },
  {
    id: 'cmp-108',
    ticket_id: 'CMP20260105Q5R6',
    title: 'Slow response from helpdesk',
    description: 'Helpdesk replies take more than 4 days. Please improve response time.',
    status: 'in_progress',
    priority: 'medium',
    category: 'Academic',
    created_at: '2026-01-05T10:00:00Z',
    resolved_at: null,
    admin_response: 'We are adding more staff to reduce response times.',
    user_id: 'u-2',
    attachments: [],
    feedback: null
  }
];

const seedUsers = [
  {
    id: 'u-1',
    name: 'Aisha Khan',
    email: 'aisha@example.com',
    password: 'password123',
    role: 'student',
    created_at: '2024-11-15T10:00:00Z',
    phone_number: '+1 (555) 010-1001',
    sms_notifications: true,
    twofa_enabled: false
  },
  {
    id: 'u-2',
    name: 'Rohan Mehta',
    email: 'rohan@example.com',
    password: 'password123',
    role: 'student',
    created_at: '2024-10-05T15:30:00Z',
    phone_number: '',
    sms_notifications: false,
    twofa_enabled: false
  },
  {
    id: 'u-3',
    name: 'Lina Alvarez',
    email: 'lina@example.com',
    password: 'password123',
    role: 'staff',
    created_at: '2024-09-21T09:45:00Z',
    phone_number: '+1 (555) 010-2002',
    sms_notifications: false,
    twofa_enabled: false
  }
];

const seedAdmins = [
  {
    id: 'a-1',
    name: 'Ravi Patel',
    email: 'admin@querypro.com',
    password: 'admin123'
  }
];

const categoryOptions = ['Technical', 'Academic', 'Hostel/Mess', 'Maintenance'];
const priorityOptions = ['low', 'medium', 'high', 'urgent'];

const loadOrSeed = (key, seedValue) => {
  try {
    const existing = localStorage.getItem(key);
    if (existing) return JSON.parse(existing);
    localStorage.setItem(key, JSON.stringify(seedValue));
    return seedValue;
  } catch (error) {
    return seedValue;
  }
};

const saveToStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Ignore storage errors in mock mode
  }
};

const hashString = (input) => {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

const paginate = (items, page = 1, perPage = 10) => {
  const total = items.length;
  const pages = Math.max(1, Math.ceil(total / perPage));
  const currentPage = Math.min(Math.max(page, 1), pages);
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  return {
    items: items.slice(start, end),
    pagination: {
      page: currentPage,
      per_page: perPage,
      total,
      pages,
      has_next: currentPage < pages,
      has_prev: currentPage > 1
    }
  };
};

const getStoredComplaints = () => loadOrSeed(STORAGE_KEYS.complaints, seedComplaints);
const setStoredComplaints = (complaints) => saveToStorage(STORAGE_KEYS.complaints, complaints);

const getStoredUsers = () => loadOrSeed(STORAGE_KEYS.users, seedUsers);
const setStoredUsers = (users) => saveToStorage(STORAGE_KEYS.users, users);

const getStoredAdmins = () => loadOrSeed(STORAGE_KEYS.admins, seedAdmins);

const getStoredTags = () => loadOrSeed(STORAGE_KEYS.tags, {});
const setStoredTags = (tags) => saveToStorage(STORAGE_KEYS.tags, tags);

const getStoredComments = () => loadOrSeed(STORAGE_KEYS.comments, {});
const setStoredComments = (comments) => saveToStorage(STORAGE_KEYS.comments, comments);

const buildDefaultTags = (complaintId) => {
  const baseTags = ['urgent', 'wifi', 'maintenance', 'food', 'portal', 'noise', 'library', 'helpdesk'];
  const hash = hashString(complaintId);
  const first = baseTags[hash % baseTags.length];
  const second = baseTags[(hash + 3) % baseTags.length];
  return Array.from(new Set([first, second]));
};

const buildDefaultComments = (complaintId) => {
  const now = new Date();
  return [
    {
      id: `${complaintId}-c1`,
      author_name: 'Support Team',
      is_admin_response: true,
      comment_text: 'Thanks for reporting this. We are looking into it.',
      created_at: new Date(now.getTime() - 1000 * 60 * 60 * 6).toISOString()
    },
    {
      id: `${complaintId}-c2`,
      author_name: 'Student',
      is_admin_response: false,
      comment_text: 'I am facing the same issue as well.',
      created_at: new Date(now.getTime() - 1000 * 60 * 60 * 2).toISOString()
    }
  ];
};

const ensureTags = (complaintId) => {
  const tagsMap = getStoredTags();
  if (!tagsMap[complaintId]) {
    tagsMap[complaintId] = buildDefaultTags(complaintId);
    setStoredTags(tagsMap);
  }
  return tagsMap[complaintId];
};

const ensureComments = (complaintId) => {
  const commentsMap = getStoredComments();
  if (!commentsMap[complaintId]) {
    commentsMap[complaintId] = buildDefaultComments(complaintId);
    setStoredComments(commentsMap);
  }
  return commentsMap[complaintId];
};

const toTicketId = (id) => `CMP${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}${String(new Date().getDate()).padStart(2, '0')}${id.slice(-4).toUpperCase()}`;

export const mockAuthApi = {
  login: async (email, password) => {
    const users = getStoredUsers();
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (!user) {
      return { success: false, message: 'Invalid email or password' };
    }
    return {
      success: true,
      message: 'Login successful',
      data: {
        user: { ...user, password: undefined },
        token: `mock-token-${user.id}`
      }
    };
  },
  signup: async (name, email, password, role) => {
    const users = getStoredUsers();
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, message: 'Email already registered' };
    }
    const newUser = {
      id: `u-${Date.now()}`,
      name,
      email,
      password,
      role,
      created_at: new Date().toISOString(),
      phone_number: '',
      sms_notifications: false,
      twofa_enabled: false
    };
    const updated = [...users, newUser];
    setStoredUsers(updated);
    return {
      success: true,
      message: 'Signup successful',
      data: {
        user: { ...newUser, password: undefined },
        token: `mock-token-${newUser.id}`
      }
    };
  }
};

export const mockAdminApi = {
  login: async (email, password) => {
    const admins = getStoredAdmins();
    const admin = admins.find(a => a.email.toLowerCase() === email.toLowerCase() && a.password === password);
    if (!admin) {
      return { success: false, message: 'Invalid admin credentials' };
    }
    return {
      success: true,
      message: 'Admin login successful',
      data: {
        admin: { id: admin.id, name: admin.name, email: admin.email, role: 'admin' },
        token: `mock-admin-token-${admin.id}`
      }
    };
  }
};

export const mockComplaintApi = {
  classifyComplaint: async (text) => {
    const hash = hashString(text || 'complaint');
    return {
      success: true,
      data: {
        predicted_category: categoryOptions[hash % categoryOptions.length],
        predicted_priority: priorityOptions[hash % priorityOptions.length],
        classification_method: 'Mock AI Classifier'
      }
    };
  },
  submitComplaint: async ({ title, description, userId }) => {
    const complaints = getStoredComplaints();
    const newId = `cmp-${Date.now()}`;
    const newComplaint = {
      id: newId,
      ticket_id: toTicketId(newId),
      title,
      description,
      status: 'pending',
      priority: 'medium',
      category: 'Technical',
      created_at: new Date().toISOString(),
      resolved_at: null,
      admin_response: '',
      user_id: userId || 'u-1',
      attachments: [],
      feedback: null
    };
    setStoredComplaints([newComplaint, ...complaints]);
    return {
      success: true,
      data: {
        complaint_id: newComplaint.id,
        ticket_id: newComplaint.ticket_id
      }
    };
  },
  listComplaints: async ({ status, userId, page = 1, perPage = 10 }) => {
    const complaints = getStoredComplaints();
    let filtered = complaints;
    if (userId) {
      filtered = filtered.filter(c => c.user_id === userId);
    }
    if (status) {
      filtered = filtered.filter(c => c.status === status);
    }
    const { items, pagination } = paginate(filtered, page, perPage);
    return {
      success: true,
      data: {
        complaints: items,
        pagination
      }
    };
  },
  getStats: async () => {
    const complaints = getStoredComplaints();
    const statusStats = complaints.reduce(
      (acc, item) => {
        acc[item.status] = (acc[item.status] || 0) + 1;
        return acc;
      },
      { pending: 0, in_progress: 0, resolved: 0, closed: 0 }
    );
    return {
      success: true,
      data: {
        total_complaints: complaints.length,
        status_stats: {
          pending: statusStats.pending,
          in_progress: statusStats.in_progress,
          resolved: statusStats.resolved
        },
        sentiment_stats: {
          positive: Math.max(1, Math.floor(complaints.length * 0.35)),
          neutral: Math.max(1, Math.floor(complaints.length * 0.4)),
          negative: Math.max(1, Math.floor(complaints.length * 0.25))
        }
      }
    };
  },
  updateStatus: async (complaintId, newStatus, adminResponse) => {
    const complaints = getStoredComplaints();
    const updated = complaints.map(c => {
      if (c.id !== complaintId) return c;
      const resolvedAt = newStatus === 'resolved' || newStatus === 'closed' ? new Date().toISOString() : c.resolved_at;
      return {
        ...c,
        status: newStatus,
        admin_response: adminResponse || c.admin_response,
        resolved_at: resolvedAt
      };
    });
    setStoredComplaints(updated);
    return { success: true };
  },
  checkStatus: async (ticketId) => {
    const complaints = getStoredComplaints();
    const complaint = complaints.find(c => c.ticket_id.toLowerCase() === ticketId.toLowerCase());
    if (!complaint) {
      return { success: false, has_complaint_data: false, message: 'Complaint not found' };
    }
    return {
      success: true,
      has_complaint_data: true,
      complaint_data: complaint
    };
  },
  submitFeedback: async (complaintId, feedback) => {
    const complaints = getStoredComplaints();
    const updated = complaints.map(c => (c.id === complaintId ? { ...c, feedback } : c));
    setStoredComplaints(updated);
    return { success: true };
  },
  listCommunityComplaints: async ({ page = 1, perPage = 5 }) => {
    const complaints = getStoredComplaints().filter(c => c.status === 'resolved' || c.status === 'closed');
    const anonymized = complaints.map(c => ({
      ...c,
      anonymous_user: `User-${c.user_id.slice(-3).toUpperCase()}`
    }));
    const { items, pagination } = paginate(anonymized, page, perPage);
    return {
      success: true,
      data: {
        complaints: items,
        pagination
      }
    };
  }
};

export const mockChatbotApi = {
  chat: async (message, user) => {
    const responseText = `Here is a helpful summary for: "${message}"\n\nIf this is a complaint, I can help you raise a ticket or suggest next steps.`;
    return {
      success: true,
      bot_response: responseText,
      suggestions: ['Show my pending complaints', 'How do I raise a new complaint?']
    };
  },
  generateComplaint: async (userInput, user) => {
    const title = `Issue reported by ${user?.name || 'user'}`;
    const description = `Summary: ${userInput}.\n\nRequested action: Please review and resolve at the earliest.`;
    return {
      success: true,
      bot_response: `Title: ${title}\nDescription: ${description}`
    };
  }
};

export const mockTrendApi = {
  getTrends: async (days) => {
    const totalDays = Number(days) || 30;
    const today = new Date();
    const trends = Array.from({ length: totalDays }).map((_, idx) => {
      const date = new Date(today.getTime() - (totalDays - idx - 1) * 24 * 60 * 60 * 1000);
      const base = 6 + (idx % 5);
      return {
        date: date.toISOString().split('T')[0],
        count: base + (idx % 3),
        resolved: Math.max(1, base - 2),
        pending: Math.max(1, Math.floor(base / 2)),
        escalated: idx % 4 === 0 ? 2 : 1
      };
    });

    return {
      success: true,
      data: {
        trends,
        summary: {
          total_in_period: trends.reduce((sum, item) => sum + item.count, 0),
          average_daily: Math.round(trends.reduce((sum, item) => sum + item.count, 0) / trends.length)
        },
        period_days: totalDays
      }
    };
  },
  getCategories: async () => {
    return {
      success: true,
      data: {
        categories: categoryOptions.map((category, index) => ({
          category,
          total: 8 + index * 3,
          resolved: 4 + index * 2,
          resolution_rate: 65 + index * 3,
          percentage: 20 - index * 2
        }))
      }
    };
  },
  getDashboard: async (days) => {
    return {
      success: true,
      data: {
        period: { days },
        metrics: {
          total_complaints: 84,
          resolution_rate: 71,
          resolved: 60,
          pending: 18,
          escalated: 6,
          escalation_rate: 7
        },
        top_categories: [
          ['Technical', 28],
          ['Academic', 21],
          ['Hostel/Mess', 19],
          ['Maintenance', 16]
        ]
      }
    };
  }
};

export const mockTagsApi = {
  getTags: async (complaintId) => {
    const tags = ensureTags(complaintId);
    return { success: true, data: { tags } };
  },
  addTags: async (complaintId, tagsToAdd) => {
    const tagsMap = getStoredTags();
    const existing = ensureTags(complaintId);
    tagsMap[complaintId] = Array.from(new Set([...existing, ...tagsToAdd]));
    setStoredTags(tagsMap);
    return { success: true, data: { tags: tagsMap[complaintId] } };
  },
  removeTag: async (complaintId, tag) => {
    const tagsMap = getStoredTags();
    tagsMap[complaintId] = (tagsMap[complaintId] || []).filter(t => t !== tag);
    setStoredTags(tagsMap);
    return { success: true, data: { tags: tagsMap[complaintId] || [] } };
  },
  getPopularTags: async () => {
    const tagsMap = getStoredTags();
    const allTags = Object.values(tagsMap).flat();
    const tagCounts = allTags.reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {});
    const popular = Object.entries(tagCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([tag]) => tag);
    return { success: true, data: { tags: popular } };
  }
};

export const mockCommentsApi = {
  getComments: async (complaintId) => {
    const comments = ensureComments(complaintId);
    return { success: true, data: { comments } };
  },
  addComment: async (complaintId, commentText, role = 'student') => {
    const commentsMap = getStoredComments();
    const existing = ensureComments(complaintId);
    const newComment = {
      id: `${complaintId}-${Date.now()}`,
      author_name: role === 'admin' ? 'Admin' : 'You',
      is_admin_response: role === 'admin',
      comment_text: commentText,
      created_at: new Date().toISOString()
    };
    commentsMap[complaintId] = [...existing, newComment];
    setStoredComments(commentsMap);
    return { success: true, data: { comment: newComment, comments: commentsMap[complaintId] } };
  }
};

export const mockExportApi = {
  exportCSV: async () => {
    const complaints = getStoredComplaints();
    const headers = ['ticket_id', 'title', 'description', 'status', 'priority', 'category', 'created_at'];
    const rows = complaints.map(c => headers.map(h => `"${String(c[h] || '').replace(/"/g, '""')}"`).join(','));
    const csv = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `complaints_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
};

export const mockSmsApi = {
  savePreferences: async (userId, { phone_number, sms_notifications }) => {
    const users = getStoredUsers();
    const updated = users.map(user => (user.id === userId ? { ...user, phone_number, sms_notifications } : user));
    setStoredUsers(updated);
    return { success: true };
  },
  register: async (userId, phone_number) => {
    const users = getStoredUsers();
    const updated = users.map(user => (user.id === userId ? { ...user, phone_number } : user));
    setStoredUsers(updated);
    return { success: true };
  }
};

export const mockVideoApi = {
  uploadVideo: async () => {
    return {
      success: true,
      data: {
        total_videos: 1,
        video: { url: 'https://via.placeholder.com/640x360.png?text=Uploaded+Video' }
      }
    };
  }
};

export const mockMiscApi = {
  getComplaintTypes: async () => {
    return {
      success: true,
      data: [
        { name: 'Technical', count: 16, color: '#3b82f6' },
        { name: 'Academic', count: 12, color: '#8b5cf6' },
        { name: 'Hostel/Mess', count: 10, color: '#f59e0b' },
        { name: 'Maintenance', count: 8, color: '#10b981' }
      ]
    };
  }
};
