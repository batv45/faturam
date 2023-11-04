module.exports = {
  types: [
    { value: 'feat',      name:'feat:      new features' },
    { value: 'fix',       name:'fix:       fix bug' },
    { value: 'docs',      name:'docs:      Documentation changes' },
    { value: 'style',     name:'style:     Code format (does not affect functionality, such as formatting corrections such as spaces, semicolons, etc.)' },
    { value: 'refactor',  name:'refactor:  Code refactoring (excluding bug fixes and feature additions)）' },
    { value: 'perf',      name:'perf:      Performance optimization' },
    { value: 'test',      name:'test:      Add and modify test cases' },
    { value: 'build',     name:'build:     Build process, external dependency changes (such as upgrading npm packages, modifying scaffolding configuration, etc.)' },
    { value: 'ci',        name:'ci:        Modify CI configuration and scripts' },
    { value: 'chore',     name:'chore:     Changes to the build process or auxiliary tools and libraries (does not affect source files, test cases)' },
    { value: 'revert',    name:'revert:    rollback commit' },
    { value: 'wip',       name:'wip:       In development' },
    { value: 'mod',       name:'mod:       Uncertain classification changes' },
    { value: 'release',   name:'release:   release' },
  ],
  scopes: [
    ['custom', 'customize'],
		['projects', 'Project setup'],
    ['components', 'Component related'],
    ['utils', 'utils Related'],
    ['styles', 'style related'],
    ['deps', 'Project dependencies'],
    ['other', 'Other modifications'],
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    }
  }),
  messages: {
    type: 'Make sure this commit follows Angular specs! Choose the type of submission you want:\n',
    scope: 'Choose a scope (optional)：',
    customScope: 'Please enter a custom scope:',
    subject: 'Fill in a short and concise description of the change：',
    body: 'Fill in a more detailed description of the change (optional). Use "|" for line breaks:',
    breaking: 'List non-compatible major changes (optional):',
    footer: 'List all changed Issues Closed (optional). Example: #31, #34：',
    confirmCommit: 'confirm submission？'
  },
  allowBreakingChanges: ['feat', 'fix'],
  subjectLimit: 100,
  breaklineChar: '|'
}
