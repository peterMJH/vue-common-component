export default {
  route: {
    dashboard: 'Dashboard',
    introduction: 'Introduction',
    documentation: 'Documentation',
    permission: 'Permission',
    icons: 'Icons',
    components: 'Components',
    componentIndex: 'Introduction',
    tinymce: 'Tinymce',
    markdown: 'Markdown',
    jsonEditor: 'JSON Editor',
    dndList: 'Dnd List',
    splitPane: 'SplitPane',
    avatarUpload: 'Avatar Upload',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'CountTo',
    componentMixin: 'Mixin',
    backToTop: 'BackToTop',
    charts: 'Charts',
    keyboardChart: 'Keyboard Chart',
    lineChart: 'Line Chart',
    mixChart: 'Mix Chart',
    example: 'Example',
    Table: 'Table',
    dynamicTable: 'Dynamic Table',
    dragTable: 'Drag Table',
    inlineEditTable: 'Inline Edit',
    complexTable: 'Complex Table',
    treeTable: 'Tree Table',
    customTreeTable: 'Custom TreeTable',
    tab: 'Tab',
    form: 'Form',
    createForm: 'Create Form',
    editForm: 'Edit Form',
    errorPages: 'Error Pages',
    page401: '401',
    page404: '404',
    errorLog: 'Error Log',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    selectExcel: 'Export Selected',
    uploadExcel: 'Upload Excel',
    zip: 'Zip',
    exportZip: 'Export Zip',
    theme: 'Theme',
    clipboardDemo: 'Clipboard',
    i18n: 'I18n',
    localAccountMngt: 'Local accounts',
    hosts: 'Hosts',
    acuntPolGrpMngt: 'Account groups',
    acuntPolMngt: 'Account policies',
    secSeverMngt: 'Security server',
    licenseStatus: 'License Status',
    approvaledHost: 'Approved Hosts',
    hostStatus: 'Host Status'
  },
  navbar: {
    logOut: 'Log Out',
    dashboard: 'Dashboard',
    github: 'Github',
    screenfull: 'screenfull',
    theme: 'theme'
  },
  login: {
    title: 'Login Form',
    logIn: 'Log in',
    username: 'Username',
    password: 'Password',
    any: 'any',
    thirdparty: 'Or connect with',
    thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !'
  },
  documentation: {
    documentation: 'Documentation',
    github: 'Github Repository'
  },
  permission: {
    roles: 'Your roles',
    switchRoles: 'Switch roles'
  },
  components: {
    documentation: 'Documentation',
    tinymceTips: 'Rich text editor is a core part of management system, but at the same time is a place with lots of problems. In the process of selecting rich texts, I also walked a lot of detours. The common rich text editors in the market are basically used, and the finally chose Tinymce. See documentation for more detailed rich text editor comparisons and introductions.',
    dropzoneTips: 'Because my business has special needs, and has to upload images to qiniu, so instead of a third party, I chose encapsulate it by myself. It is very simple, you can see the detail code in @/components/Dropzone.',
    stickyTips: 'when the page is scrolled to the preset position will be sticky on the top.',
    backToTopTips1: 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
    backToTopTips2: 'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
    imageUploadTips: 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.'
  },
  common: {
    week: 'week',
    day: 'day',
    requestServer: 'request is being processed. Please wait.',
    alert: 'Notice',
    oneselected: 'only one can be selected',
    success: 'completed',
    inView: 'In View.',
    notFoundAsset: 'Not exist asset.'
  },
  acuntPolGrpMngt: {
    acuntPolGrpMngt: 'groups',
    acuntPolGrpNm: 'group name',
    osTypCd: 'os type',
    aplytoPolNm: 'application policy',
    grpOsTypCd: 'group os type',
    grpMember: 'group member',
    polAplytoYn: 'Policy active',
    active: 'activation',
    inActive: 'inactive',
    create: 'produce',
    wantToSave: 'do you want to save?',
    wantToDel: 'are you sure you want to delete?',
    errorHasOccurred: 'an error has occurred.',
    wantToDelSel: 'please choose what you want to delete?',
    grpNm: 'account group',
    hostNm: 'host name',
    ipAdr: 'IP adress',
    acuntNm: 'account name',
    rsltVal: 'result value',
    aplyDt: 'application date',
    acuntPolGrpMod: 'Edit account group',
    acuntPolRslt: 'Result of application of account policy',
    acuntNotPolRslt: 'Account policy unapplied result',
    aplyHost: 'Applicable Host',
    acuntPolGrpReg: 'Create account group',
    acuntPol: 'Account policy'

  },
  acuntPolMngt: {
    policycre: 'create policy',
    policydel: 'delete policy',
    policycopy: 'copy policy',
    polAplytoYn: 'whether the policy is applied',
    polNm: 'policy name',
    osTypCd: 'os type',
    osDtl: 'os details',
    osPlatfmCd: 'etting os type',
    acuntPolGrpNm: 'account group name',
    acuntPolGrp: 'account group',
    optioin: 'option',
    activityyn: 'policy active',
    saveordel: 'save/delete',
    replayingPol: 'Reapplying policies',
    applyRslt: 'Application result',
    pwdAplyOpt: 'Password Enforcement Options',
    aplyOptForPwd: 'Password Applicable options',
    aplyOptPwdValidation: 'Application of Password Validation',
    aplyOptForPwdValidation: 'Password Validation Applicable Options',
    acuntPolMod: 'Edit account policy',
    acuntPolOptMod: 'Edit account policy',
    acuntPolOptReg: 'Create account policy',
    polActProgress: 'Policy activity progress',
    succ: 'success',
    notAply: 'Not applicable',
    noSetPolOpt: 'No setting policy options',
    PWD_EXPIRED: 'password expiration',
    PWD_WARN_TIME: 'warning time before password expiration',
    PWD_LAST_CHG: 'the last time the password was changed',
    PWD_MAXAGE: 'password expiration period',
    PWD_MINAGE: 'minimum password change period',
    PWD_LIFETIME: 'password lifetime',
    PWD_MINIMUM_LENGTH: 'password minimum length',
    PWD_MAXIMUM_LENGTH: 'maximum password length',
    PWD_HISTORY_NUM: 'number of password history',
    PWD_MIN_DIFF: 'limited number of reusable characters',
    PWD_MIN_UPPER: 'password allowed minimum capitalization',
    PWD_MIN_LOWER: 'minimum number of lower case characters allowed',
    PWD_MAX_REPEATS: 'passwords allowed maximum number of iterations',
    PWD_MIN_SYMBOLS: 'password allowed Minimum number of special characters',
    PWD_MIN_NUMERIC: 'minimum number of passwords allowed',
    PWD_MIN_ALPHA: 'minimum password allowed characters',
    PWD_MIN_NONALPHA: 'password allowed Minimum number of characters',
    PWD_WHITESPACE: 'allow password space',
    PWD_FMT_MAX_REPEATS: 'Passwords allowed maximum number of iterations',
    PWD_FMT_MIN_NUMERIC: 'Minimum number of passwords allowed',
    PWD_FMT_MIN_ALPHA: 'Minimum password allowed characters',
    PWD_FMT_MIN_SYMBOLS: 'Password allowed Minimum number of special characters',
    PWD_FMT_MIN_UPPER: 'Password allowed minimum capitalization',
    PWD_FMT_MIN_NUMRULES: 'Password validation Minimum usage count',
    PasswordComplexity: 'Passwords must satisfy complexity',
    PasswordHistorySize: 'Recent password remembrances',
    MaximumPasswordAge: 'Maximum password age',
    MinimumPasswordAge: 'Minimum password age',
    MinimumPasswordLength: 'Minimum password length',
    ClearTextPassword: 'Storing passwords with readable encryption',
    LockoutBadCount: 'Account lockout threshold',
    LockoutDuration: 'Account lockout period',
    ResetLockoutCount: 'Reset account lockouts after',
    appPwdPol: 'Applicable Password Policy',
    appAcuntLockPol: 'Applicable Account Lockout Policy',
    pwdPol: 'Apply password policy',
    pAcuntLockPol: 'Apply Account Lockout Policy',
    use: 'use',
    unUse: 'not userd',
    pwdRemember: 'Password Remembered',
    txt: 'text',
    minute: 'minute',
    invalLogonAttp: 'Invalid logon attempts'
  },
  account: {
    all: 'all',
    osGroupOnly: '(Only)',
    acuntId: 'account ID',
    acuntDescipt: 'account description',
    mngtDescipt: 'management Description',
    acuntStatCd: 'account status code',
    mngtStatCd: 'management status codes',
    userExpiredPwd: 'account expiration datetime',
    acuntStartHopDay: 'date you want your account to start',
    ver: 'version',
    supers: 'SUPERS',
    loginProfilePath: 'login profile path',
    actDisabled: 'ACT_DISABLED',
    actPgrp: 'ACT_PGRP',
    actHomedir: 'home directory',
    actDisabledReason: 'account Inactivity Reason',
    prfSyncAttribs: 'PRF_SYNC_ATTRIBS',
    actPasswd: 'password',
    actPasswdConfirm: 'confirm Password',
    actUid: 'UID',
    actExpires: 'account Expiration Date',
    pwdExpired: 'change password on next login',
    pwdWarnTime: 'PWD_WARN_TIME',
    pwdLastChg: 'date and time of last password change',
    pwdMaxage: 'PWD_MAXAGE',
    pwdMinage: 'PWD_MINAGE',
    pwdLifetime: 'PWD_LIFETIME',
    actLastSuccLogon: 'last login',
    actLastUnsuccLogon: 'ACT_LAST_UNSUCC_LOGON',
    actLockoutNum: 'ACT_LOCKOUT_NUM',
    actNumBadlogons: 'ACT_NUM_BADLOGONS',
    actUnusedLimit: 'ACT_UNUSED_LIMIT',
    actPgid: 'ACT_PGID',
    actSkeleton: 'ACT_SKELETON',
    actShell: 'ACT_SHELL',
    actDeleteHomedir: 'ACT_DELETE_HOMEDIR',
    resetPasswdAgeYn: 'reset password chage cycle',
    pwdMinimumLength: 'PWD_MINIMUM_LENGTH',
    pwdMaximumLength: 'PWD_MAXIMUM_LENGTH',
    pwdHistoryNum: 'PWD_HISTORY_NUM',
    pwdMinDiff: 'PWD_MIN_DIFF',
    pwdMinUpper: 'PWD_MIN_UPPER',
    pwdMinLower: 'PWD_MIN_LOWER',
    pwdMaxRepeats: 'PWD_MAX_REPEATS',
    pwdMinSymbols: 'PWD_MIN_SYMBOLS',
    pwdMinNumeric: 'PWD_MIN_NUMERIC',
    pwdMinAlpha: 'PWD_MIN_ALPHA',
    pwdMinNonalpha: 'PWD_MIN_NONALPHA',
    pwdWhitespace: 'PWD_WHITESPACE',
    notActExpires: 'everlasting',
    hosttotal: 'host-wide',
    assetNm: 'host name',
    asset: 'host',
    ip: 'IP address',
    assetTypCd: 'account status',
    unixOsAcuntDefaultProp: 'account properties',
    grpNm: 'main group',
    polNm: 'policy name',
    grpGid: 'GID',
    os: 'OS',
    accountcur: 'account Status',
    sum: 'sum',
    active: 'Active',
    disable: 'Disable',
    lock: 'Lock',
    localAcunt: 'LocalAccount',
    localGrp: 'LocalGroup',
    addLocalAcunt: 'create a local account',
    addLocalGrp: 'create local group',
    editLocalGrp: 'edit local group',
    osPolMngt: 'os default policies',
    osBasicPol: 'OS default policy',
    acuntNm: 'account name',
    upvGrpAcuntMemb: 'group member',
    upvGrpAcuntMembSel: 'select group members',
    propNm: 'attribute name',
    setVal: 'setting value',
    realVal: 'server set value',
    localAcuntNew: 'create an account',
    localAcuntEdit: 'edit account',
    multyHosts: 'destination host',
    hostList: 'host List',
    searchValue: 'search requirement',
    subGrpTitle: 'Subgroup',
    ACCOUNT_CREATING: 'generating',
    svrip: 'host IP',
    grpName: 'group name',
    polDetail: 'policy description',
    multyAcuntNew: 'create a batch of accounts',
    assetGrpNm: 'host group',
    acuntTotalCnt: 'sum',
    polItem: 'Iiem',
    defaultPropYn: 'division',
    searchHost: 'search host',
    startActExpires: 'start date',
    endActExpires: 'End date',
    usr_name: 'user name',
    user_full_name: 'user full name',
    usr_comment: 'explanation',
    usr_disp_nm: 'user pool name',
    usr_homedir: 'home directory',
    usr_profile_path: 'user profile path',
    usr_script_path: 'logon script',
    usr_pwd: 'user password',
    usr_pwd_encrypt: 'user password encrypted',
    usr_pwd_cant_change: 'can not change password',
    usr_pwd_dont_expired: 'password never expires',
    usr_pwd_next_change: 'change password at next logon',
    usr_pwd_expiration_date: 'password Expiration Time',
    usr_disabled: 'account disabled',
    usr_smartcard_required: 'using a smart card for logon',
    user_name: 'user name',
    user_comment: 'explanation',
    user_disp_nm: 'user pool name',
    user_homedir: 'home directory',
    user_profile_path: 'user profile path',
    user_script_path: 'logon script',
    user_pwd: 'user password',
    user_pwd_encrypt: 'user password encrypted',
    user_pwd_cant_change: 'can not change password',
    user_pwd_dont_expired: 'password never expires',
    user_pwd_next_change: 'change password at next logon',
    user_pwd_expiration_date: 'password Expiration Time',
    user_disabled: 'account disabled',
    user_smartcard_required: 'using a smart card for logon',
    userLockout: 'user lock',
    succ: 'success',
    propInfo: 'Property Information',
    msg: 'message',
    fail: 'failure',
    excelFileHost: 'localAcunt Host list',
    excelFileAcunt: 'localAcunt Acunt list',
    excelFileGrp: 'localAcunt Group list',
    excelFileProp: 'Os default property list',
    ou: 'OU',
    adAccount: 'Account',
    adGroup: 'Group',
    userPreSet: 'userPreSet list',
    presetNm: 'Preset name',
    acuntExpDt: 'account expired date',
    acuntUse: 'account useable',
    pwdChgImpossible: 'password changed impossible',
    pwdUnlimited: 'password unlimited'
  },
  hostMngt: {
    domainSettings: 'Domain settings',
    domainGroup: 'Domain member',
    approvalLine: 'Approval line',
    defaultSettings: 'Basic setting',
    hostSettings: 'Host Configuration',
    packageManagement: 'Package Management',
    logInfo: 'Log information',
    unixLogFilePath: 'Unix log file path',
    winLogFilePath: 'Windows log file path',
    recCycle: 'Recording cycle',
    altInfo: 'About alerts',
    logFilter: 'Log filter',
    mulFilter: 'Multiple filters',
    waitMsg: 'Waiting message',
    timeErrRange: 'Time error range',
    memoryMax: 'Memory maximum',
    minDiskCap: 'Minimum Disk Capacity',
    certifiExpt: 'Certificate Expiration',
    performance: 'Measure performance',
    measurCycle: 'Measurement cycle',
    cpuThresholdAlt: 'CPU Threshold Notification',
    maxMemAlt: 'Max Memory notification',
    minDiskWarn: 'Minimum Disk Warning',
    idleSpaceAlt: 'Idle space notification',
    diskInspectionMethod: 'Disk Inspection Method',
    pwdKeyChange: 'Cryptographic key change frequency',
    svrGrp: 'Server group',
    grpUnsfidSvr: 'Group unspecified server',
    svrNm: 'Server name',
    svrBasicInfo: 'Server Basics',
    osDivision: 'OS Classification',
    osDatail: 'OS Details',
    paymentTaskDivisioin: 'Payment service division',
    mngerNm: 'Manager name',
    download: 'Download',
    approvalList: 'List of finalists',
    appTaskDiv: 'Approval task division',
    approvalDiv: 'Approval division',
    appOrder: 'Approval order',
    manager: 'manager',
    svrAppDelInfo: 'About deleting server billing lines',
    dtTm: 'date and time',
    delReason: 'Reason for deletion',
    deleter: 'Delete',
    managerAdd: 'Add manager',
    homePath: 'home path',
    assetClass: 'asset class',
    reAgent: 'Redo Agent',
    oper: 'manager',
    name: 'name',
    userAppDivTyp: 'User approval classification type',
    no: 'no',
    dept: 'Department',
    email: 'e-mail',
    listTyp: 'List type',
    installPackage: 'Installing the package',
    packageUpdatge: 'Package Updates',
    delPackage: 'Delete a package',
    packageInfo: 'Package Information',
    packageNm: 'Package name',
    version: 'version',
    condition: 'condition',
    explanation: 'Explanation',
    installedPackages: 'Installed Packages',
    installablePackages: 'Installable Packages',
    updatablePackages: 'Updateable package',
    host: 'host',
    approval: 'approval',
    unapproval: 'Unapproved',
    cnt: 'cnt',
    productCategory: 'Product Category',
    managerNm: 'Manager name',
    approvalSts: 'Approval status',
    approvalUser: 'Approver',
    approvalDtTm: 'On approval date',
    regDtTm: 'Date of registration',
    licensing: 'Licensing',
    licensecertifi: 'License certification',
    licenseExpir: 'License expiration date',
    certifi: 'certification',
    certifiRevocation: 'Certificate revocation',
    authentication: 'Authentication',
    authenticationDtTm: 'Authentication date and time',
    authenticator: 'Authenticator',
    packageRollback: 'Package Rollback',
    packageCommit: 'Package commit',
    domainMngt: 'Domain management',
    domainNm: 'Domain name',
    moduleNm: 'Module name',
    packagetyp: 'Package type',
    grpServer: 'Group assignment server',
    nuGrpServer: 'Group unspecified server',
    domainAdd: 'Add a domain',
    domainMod: 'Change domain'
  },
  button: {
    apply: 'apply',
    reset: 'reset search',
    addview: '+View more',
    bundlecre: 'batch creation',
    bundleReCre: 'batch recreation',
    bundlemod: 'bulk edit',
    del: 'delete',
    search: 'search',
    save: 'save',
    edit: 'modified',
    delete: 'delete',
    delSelection: 'delete selected',
    duplicate: 'double check',
    confirm: 'confirm',
    cancel: 'cancel',
    close: 'close',
    addMultyAcunt: 'batch creation',
    create: 'create new',
    acuntCreate: 'create an account',
    grpCreate: 'create group',
    directInput: 'direct input',
    grpDelete: 'delete group',
    sync: 'synchronization',
    acuntSync: 'acunt synchronize',
    mod: 'change',
    acuntDel: 'delete account',
    grpDel: 'delete group'
  },
  manager_table: {
    no: 'No',
    managerdv: 'security server identification',
    svrgrpoper: 'group contact',
    svrnm: 'security server name',
    svrip: 'IP',
    oper: 'manager',
    svrfuc: 'Server function',
    agentcnt: 'Agent cnt(account cnt)',
    syncdttm: 'synchronization date',
    regdt: 'registration date',
    search: 'apply Filter',
    search_reset: 'initialize filter',
    creNew: 'Create new',
    accessInfo: 'Access information',
    secSrvInfoMod: 'Fix security server information',
    secSrvInfoReg: 'Security server information registration'
  },
  table: {
    dynamicTips1: 'Fixed header, sorted by header order',
    dynamicTips2: 'Not fixed header, sorted by click order',
    dragTips1: 'The default order',
    dragTips2: 'The after dragging order',
    title: 'Title',
    importance: 'Imp',
    type: 'Type',
    remark: 'Remark',
    search: 'Search',
    add: 'Add',
    export: 'Export',
    reviewer: 'reviewer',
    id: 'ID',
    date: 'Date',
    author: 'Author',
    readings: 'Readings',
    status: 'Status',
    actions: 'Actions',
    edit: 'Edit',
    publish: 'Publish',
    draft: 'Draft',
    delete: 'Delete',
    cancel: 'Cancel',
    confirm: 'Confirm',
    result: 'result'
  },
  alert: {
    succProcess: 'Successfully processed.',
    errOccurred: 'An error has occurred',
    succDelete: 'Successfully deleted.',
    succMod: 'Corrected successfully.',
    noPolOpt: 'There are no policy option entries.',
    acuntPolOverlap: 'There is a registered policy for the account group you want to register.',
    succReg: 'Registered successfully.',
    polCopyExcdOne: 'The policy copy destination can not exceed one.',
    plzCopyPolSel: 'Please select one policy copy destination.',
    reaplyPol: 'Do you want to reapply the policy?',
    disbPol: 'Are you sure you want to disable the policy?',
    aplyPol: 'Apply policy?',
    polDelete: 'Are you sure you want to delete this policy?',
    plzSelTarget: 'Please select a target to delete',
    selGrpDel: 'Are you sure you want to delete the selected group?',
    plzSel: 'Choose',
    succSave: 'Successfully saved',
    wantDel: 'Are you sure you want to delete?',
    plzDelAppSel: 'Please select a holder to delete',
    plzPassword: 'Please enter a password',
    wnatSave: 'Do you want to save?',
    selAcuntDelWant: 'Are you sure you want to delete the selected account?',
    syncAsset: 'Are you sure to synchronize information for selected host?',
    delSelectionWant: 'Are you sure you want to delete the selected items',
    grpLengthLarge: 'The most number of sub group is 5',
    plzMaxPwdEnt: 'Please enter the maximum password time',
    minPwdtmlesMaxPwdtm: 'Minimum password time must be less than maximum password time',
    acuntLockSet: 'Can only be set if account lockout threshold is specified',
    rstLockLessEq: 'Reset account lockout after time must be less than or equal to account lockout time',
    plzSetValue: 'Please enter policy set value',
    plzSelctHost: 'Please select the host group or host first',
    syncComplete: 'Synchronizing is completed',
    wantMultyAplyAcunt: 'Are you sure you want to apply multy account?',
    wantMultyReAplyAcunt: 'Are you sure you want to re apply account for fail last?'
  },
  validator: {
    alreadyAcunt: 'the ID that already exists.',
    alreadyUid: 'is a UID that already exists.',
    alreadyHomeDir: 'this is an existing home directory.',
    noAcunt: 'please enter your account ID.',
    noAcuntUid: 'please enter a UID.',
    noHomeDir: 'please enter your home directory.',
    onlyForNumber: 'only numbers can be entered.',
    onlyForEnGAndNum: 'only alphanumeric characters can be entered.',
    validForAcuntId: 'The first character must be alphabet, and also alphanumeric characters can be entered.',
    unixAcuntLeng: 'must be large than 5 and less then 16 digits.',
    windowAcuntLeng: 'must be large than 4 and less then 20 digits.',
    alreadyGrpNm: 'group name already exists.',
    alreadyGid: 'Is already a GID.',
    noGrpNm: 'please enter group name.',
    onlyForPaths: 'only English, numbers and "/" can be entered.',
    acuntStatCdIs: 'account status is',
    noSelectedAcunt: 'No account selected.',
    noSelectedStatCd: 'Please select an account status code.',
    isEditSelectedAcunt: 'Do you want to modify the selected account?',
    noIpFormat: 'It is not an exact IP format.',
    grpMemtoRegSelect: 'Please select a group member to register.',
    grpMemRegAlert: 'If you modify an account that belongs to a group to be a group member, the policy will be removed from the policy if it is being applied',
    aplyOptValSel: 'Please select the value of the application option.',
    plzEnterPolNm: 'Please enter a policy name.',
    plzSelAcuntGrp: 'Please select an account group',
    plzSelOstypApyOpt: 'Please select OS type and apply option.',
    plzValSave: 'Please enter a value to save',
    plzSelAppDiv: 'Please select Approval division',
    plzSelUserAppDivTyp: 'Please select the user approval division type.',
    plzAppOrder: 'Please enter a approval order',
    plzSelContPerson: 'Please select a contact person',
    plzReasonDel: 'Please enter a reason for removal',
    plzSelHost: 'Please select a host',
    selTarHostFromTree: 'Please select target hosts in host tree(right)',
    underGrpReg: 'Can be created under a group',
    startEndDay: 'End date must be greater than or equal to start date',
    confirmSave: 'Would like to save continue?',
    gidIs: 'GID is',
    passwdNotSame: 'The confirm password is not same with setting password',
    passwdNon: 'Please input password',
    presetNmNon: 'Please input Preset name'
  },
  errorLog: {
    tips: 'Please click the bug icon in the upper right corner',
    description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
    documentation: 'Document introduction'
  },
  excel: {
    export: 'Export',
    selectedExport: 'Export selected items',
    placeholder: 'Please enter the file name(default excel-list)'
  },
  zip: {
    export: 'Export',
    placeholder: 'Please enter the file name(default file)'
  },
  theme: {
    change: 'Theme change',
    documentation: 'Theme documentation',
    tips: 'Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.'
  }
}