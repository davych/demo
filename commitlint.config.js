module.exports = {
    extends: [
        '@commitlint/config-conventional',
        '@commitlint/config-lerna-scopes'
    ],
    rules: {
        'subject-case': [
            0,
            'never'
        ],
        'references-empty': [2, 'never']
    },
    parserPreset: {
        parserOpts: {
            issuePrefixes: ['PROJ-']
        }
    }
}
