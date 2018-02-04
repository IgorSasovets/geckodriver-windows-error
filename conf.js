exports.config = {
  specs : [ 'geckoDriverBug_spec.js' ],
	rootElement : 'html',
	maxSessions: 1,
  directConnect: true,
  capabilities : {
    browserName : 'firefox'
  }
}
