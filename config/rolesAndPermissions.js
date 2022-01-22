exports.ROLES = {
    IMS_ADMINISTRATOR: 'iMS Administrator',
    IMS_HOS: 'iMS Head of service',
    IMS_AUDITOR: 'iMS Auditor',
    IMS_BASIC: 'iMS Basic',
}
exports.ROLE_TYPES = {
    PREMITIVE: 'Premitive',
    CUSTOM: 'Custom'
}
exports.IMS_POLICIES = {
    IMS_SYSTEM_ADMINISTRATION: 'iMS System administration',
    IMS_BUSINESS_FUNCTION: 'iMS Business function',
    IMS_COMPLIANCE_FUNCTION: 'iMS Compliance body',
    IMS_SUPER_ADMIN_USER: 'iMS Super admin',
    IMS_HOS_USER: 'iMS Head of service',
    IMS_BASIC_USER: 'iMS Basic user',
    IMS_AUDITOR_USER: 'iMS Auditor',
    CUSTOM_FUNCTION: 'Custom build',
}
exports.IMS_SERVICES = {
    DASHBOARD: 'Dashboard',
    OUR_IMS: 'Our iMS',
    IAM_GROUPS: 'Business units',
    IAM_PREMISES: 'Premises',
    IAM_ROLES: 'Roles',
    IAM_ACCESS_POLICIES: 'Access policies',
    INVENTORY: 'Inventory',
    RISK_MANAGEMENT: 'Risk management',
    INCIDENT_MANAGEMENT: 'Incident management',
    AUDIT: 'Audit',
    MANAGEMENT_REVIEW: 'Management review',
    KPI_OBJECTIVE: 'Kpi/Objectives',
    CONTINUAL_IMPROVEMENT_PLAN: 'Continual improvement plan',
    COMPLIANCE_TOOL: 'Compliance toolkits',
    SUPPLIER_MANAGEMENT: 'Supplier management',
    DOCUMENT_MANAGEMENT: 'Document management',
    TASK_MANAGER: 'Task manager',
    CALENDAR: 'Calendar',
    PROJECT_MANAGEMENT: 'Project management',
    USERS: 'Users',
    NOTIFICATIONS: 'Notifications',
    LICENSE_MANAGEMENT: 'License management',
    SYSTEM_DEFAULTS: 'System configuration',
    CQC: 'CQC',
    ISO20000: 'ISO 20000',
    ISO27001: 'ISO 27001',
    ISO27002: 'ISO 27002',
    ISO9001: 'ISO 9001',
    ISO45001: 'ISO 45001',
    ISO14001: 'ISO 14001',
    DSPTNHS: 'DSPT',
}
exports.CUSTOMIZABLE_SERVICES = {
    INVENTORY: 'Inventory',
    RISK_MANAGEMENT: 'Risk management',
    INCIDENT_MANAGEMENT: 'Incident management',
    MANAGEMENT_REVIEW: 'Management review',
    KPI_OBJECTIVE: 'Kpi/Objectives',
    CONTINUAL_IMPROVEMENT_PLAN: 'Continual improvement plan',
    SUPPLIER_MANAGEMENT: 'Supplier management',
    DOCUMENT_MANAGEMENT: 'Document management',
    TASK_MANAGER: 'Task manager',
    CALENDAR: 'Calendar',
    CQC: 'CQC'
}
exports.GROUP_TYPE = {
    INTERNAL: 'Internal function',
    EXTERNAL: 'External function',
}
exports.USER_TYPE = {
    INTERNAL: 'Internal',
    EXTERNAL: 'External',
}
exports.ACCESS_SCOPE = {
    ALL_BUSINESS_UNIT: 'All business unit',
    SINGLE_BUSINESS_UNIT: 'Single business unit'
}
exports.ACCESS_POLICY_TYPE = {
    IMS_MANAGED: 'iMS managed',
    CUSTOMER_MANAGED: 'Customer managed'
}
exports.POLICY_USAGE = {
    BUSINESS_UNIT: 'Business unit',
    ROLES: 'Roles'
}
exports.EFFECTS = {
    ALLOW: 'Allow',
    BLOCK: 'Block',
    ALL: 'All'
}
exports.ACTIONS = {
    ALL: 'All',
    CREATE: 'Create',
    UPDATE: 'Update',
    READ: 'Read',
    DELETE: 'Delete',
}
exports.RESOURCES = {
    ALL: 'All',
    ISO20000: 'iso20000',
    ISO27001: 'iso27001',
    ISO27002: 'iso27002',
    ISO9001: 'iso9001',
    ISO45001: 'iso45001',
    ISO14001: 'iso14001',
    DSPTNHS: 'dsptNhs',
    CQC: 'cqc'
}
exports.LICENSES = {
    TYPE: {
        BASIC: 'Basic',
        COMPLIANCE: 'Compliance',
        BUSINESSFUNCTION: 'businessFunction'
    },
    BUSINESSFUNCTION: 'businessFunction',
    COMPLIANCEFUNCTION: 'complianceFunction',
    ENDUSER: 'endUser',
    AUDITOR: 'auditor',
    ISO20000: 'iso20000',
    ISO27001: 'iso27001',
    ISO27002: 'iso27002',
    ISO9001: 'iso9001',
    ISO45001: 'iso45001',
    ISO14001: 'iso14001',
    DSPTNHS: 'dsptNhs',
    CQC: 'cqc'
}