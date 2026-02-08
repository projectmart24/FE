/**
 * Feature Utilities and Helpers (Frontend Only)
 * Mock data generators for tags, search, export, comments, etc.
 */

/**
 * Random Data Generators
 */
const randomId = () => Math.floor(Math.random() * 100000);
const randomFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];

const tagNames = [
  'urgent', 'billing', 'technical', 'support', 'feature-request',
  'bug', 'enhancement', 'documentation', 'ui-ux', 'performance',
  'security', 'accessibility', 'mobile', 'api', 'database'
];

const categories = ['General', 'Billing', 'Technical Support', 'Feature Request', 'Other'];
const adminNames = ['John Admin', 'Sarah Manager', 'Mike Supervisor', 'Lisa Coordinator'];
const priorities = ['Low', 'Medium', 'High', 'Critical'];
const statuses = ['Open', 'In Progress', 'Resolved', 'On Hold'];

/**
 * Tags Management (Mock)
 */
export const tagsAPI = {
  getTags: async () => {
    const tags = [
      { id: randomId(), name: randomFromArray(tagNames) },
      { id: randomId(), name: randomFromArray(tagNames) },
      { id: randomId(), name: randomFromArray(tagNames) }
    ];
    return { success: true, data: { tags } };
  },

  addTags: async (complaintId, tags) => {
    const newTags = tags.map(tag => ({
      id: randomId(),
      name: tag
    }));
    return { success: true, data: { tags: newTags } };
  },

  removeTag: async () => {
    return { success: true, data: { tags: [] } };
  },

  getPopularTags: async () => {
    return tagNames.slice(0, 10).map((name, idx) => ({
      id: idx,
      name,
      count: Math.floor(Math.random() * 100) + 5
    }));
  }
};

/**
 * Admin Notes (Internal, not visible to users)
 */
export const adminNotesAPI = {
  getNotes: async () => {
    return [
      {
        id: randomId(),
        note_text: 'Customer escalated via phone',
        created_at: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
        admin_name: randomFromArray(adminNames)
      },
      {
        id: randomId(),
        note_text: 'Waiting for customer response',
        created_at: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
        admin_name: randomFromArray(adminNames)
      }
    ];
  },

  addNote: async (complaintId, noteText) => {
    return {
      id: randomId(),
      note_text: noteText,
      created_at: new Date().toISOString(),
      admin_name: randomFromArray(adminNames)
    };
  }
};

/**
 * Comments (Public discussion thread)
 */
export const commentsAPI = {
  getComments: async () => {
    return {
      success: true,
      data: {
        comments: [
          {
            id: randomId(),
            comment_text: 'Thank you for reporting this issue.',
            author: 'Admin Team',
            created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
            is_admin: true
          },
          {
            id: randomId(),
            comment_text: 'Any update on this matter?',
            author: 'Customer',
            created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
            is_admin: false
          },
          {
            id: randomId(),
            comment_text: 'We are investigating the issue.',
            author: 'Admin Team',
            created_at: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
            is_admin: true
          }
        ]
      }
    };
  },

  addComment: async (complaintId, commentText) => {
    return {
      success: true,
      data: {
        comment: {
          id: randomId(),
          comment_text: commentText,
          author: 'You',
          created_at: new Date().toISOString(),
          is_admin: false
        }
      }
    };
  }
};

/**
 * Canned Responses (Admin templates)
 */
export const cannedResponsesAPI = {
  getResponses: async (category) => {
    const responses = [
      {
        id: randomId(),
        title: 'Thank you for contacting us',
        body: 'We appreciate you reaching out. Our team is looking into your concern.',
        category: 'General',
        is_global: true
      },
      {
        id: randomId(),
        title: 'Refund Request',
        body: 'We have received your refund request and will process it within 5-7 business days.',
        category: 'Billing',
        is_global: true
      },
      {
        id: randomId(),
        title: 'Technical Support',
        body: 'Please try the following steps to resolve your technical issue...',
        category: 'Technical Support',
        is_global: true
      }
    ];
    
    return category ? responses.filter(r => r.category === category) : responses;
  },

  createResponse: async (title, body, category, isGlobal) => {
    return {
      id: randomId(),
      title,
      body,
      category,
      is_global: isGlobal,
      created_at: new Date().toISOString()
    };
  },

  deleteResponse: async () => {
    return { success: true, message: 'Response deleted successfully' };
  }
};

/**
 * Complaint Templates (User quick submit)
 */
export const templatesAPI = {
  getTemplates: async () => {
    return [
      {
        id: randomId(),
        title: 'Billing Issue',
        description_template: 'I was charged incorrectly. Please review my account.',
        category: 'Billing',
        suggested_priority: 'High'
      },
      {
        id: randomId(),
        title: 'Feature Request',
        description_template: 'I would like to request the following feature...',
        category: 'Feature Request',
        suggested_priority: 'Medium'
      },
      {
        id: randomId(),
        title: 'Technical Problem',
        description_template: 'I am experiencing a technical issue. Steps to reproduce...',
        category: 'Technical Support',
        suggested_priority: 'High'
      }
    ];
  },

  createTemplate: async (title, descriptionTemplate, category, suggestedPriority) => {
    return {
      id: randomId(),
      title,
      description_template: descriptionTemplate,
      category,
      suggested_priority: suggestedPriority,
      created_at: new Date().toISOString()
    };
  }
};

/**
 * Search (Mock)
 */
export const searchAPI = {
  search: async (queryText, page = 1) => {
    const complaints = Array.from({ length: 15 }, (_, i) => ({
      id: randomId(),
      title: `${queryText} - Issue #${i + 1}`,
      description: `This is related to ${queryText}. Detailed description here...`,
      status: randomFromArray(statuses),
      priority: randomFromArray(priorities),
      created_at: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
      category: randomFromArray(categories)
    }));
    
    return {
      data: complaints,
      page,
      total: 150,
      limit: 15
    };
  }
};

/**
 * Export (Mock)
 */
export const exportAPI = {
  exportCSV: async () => {
    try {
      const complaints = Array.from({ length: 50 }, (_, i) => ({
        ID: randomId(),
        Title: `Complaint ${i + 1}`,
        Description: `Sample complaint description`,
        Status: randomFromArray(statuses),
        Priority: randomFromArray(priorities),
        Category: randomFromArray(categories),
        Created: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString()
      }));

      let csvContent = 'data:text/csv;charset=utf-8,';
      csvContent += ['ID', 'Title', 'Description', 'Status', 'Priority', 'Category', 'Created'].join(',') + '\n';
      
      complaints.forEach(complaint => {
        csvContent += [
          complaint.ID,
          complaint.Title,
          complaint.Description,
          complaint.Status,
          complaint.Priority,
          complaint.Category,
          complaint.Created
        ].join(',') + '\n';
      });

      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', `complaints_${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      return { success: true };
    } catch {
      throw new Error('Failed to export complaints');
    }
  }
};

/**
 * Assignment (Mock)
 */
export const assignmentAPI = {
  assignComplaint: async () => {
    return {
      success: true,
      message: 'Complaint assigned successfully',
      assigned_to: randomFromArray(adminNames),
      assigned_at: new Date().toISOString()
    };
  }
};

/**
 * SLA Tracking (Mock)
 */
export const slaAPI = {
  getSLATracking: async (complaintId) => {
    const responseTime = Math.floor(Math.random() * 24) + 1;
    const resolutionTime = Math.floor(Math.random() * 72) + 1;
    
    return {
      complaint_id: complaintId,
      response_time_hours: responseTime,
      response_sla_hours: 24,
      resolution_time_hours: resolutionTime,
      resolution_sla_hours: 72,
      is_breached: resolutionTime > 72,
      status: resolutionTime > 72 ? 'Breached' : 'On Track'
    };
  }
};

/**
 * Escalation (Mock)
 */
export const escalationAPI = {
  escalateStaleComplaints: async () => {
    return {
      success: true,
      message: 'Stale complaints escalated',
      escalated_count: Math.floor(Math.random() * 10) + 1
    };
  }
};

/**
 * Anonymous Toggle (Mock)
 */
export const anonymousAPI = {
  toggleAnonymous: async (complaintId) => {
    const isAnonymous = Math.random() > 0.5;
    return {
      success: true,
      complaint_id: complaintId,
      is_anonymous: isAnonymous,
      message: `Complaint is now ${isAnonymous ? 'anonymous' : 'public'}`
    };
  }
};

/**
 * Utility: Format date and time
 */
export const formatDateTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

/**
 * Utility: Get time ago
 */
export const getTimeAgo = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  
  if (seconds < 60) return `${seconds}s ago`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
  
  return date.toLocaleDateString();
};

/**
 * Utility: Validate email
 */
export const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

/**
 * Utility: Debounce function
 */
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};
