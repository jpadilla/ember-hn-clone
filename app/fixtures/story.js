export default = App.Story.FIXTURES = [
  {
    id: 1,
    title: 'User onboarding',
    url: 'http://useronboard.com/',
    text: 'lorem ipsum',
    votes: [1, 2],
    submitedBy: 1,
    createdAt: new Date()
  },
  {
    id: 2,
    title: 'Ask DN: Internet Explorer Testing Methods',
    url: 'https://news.layervault.com/stories/10799-ask-dn-internet-explorer-testing-methods',
    text: "Starting with IE11, it seems that Microsoft has done away with the awesome developer tools for testing older versions. This sucks. The official recommendation is to get the pre-made virtual machines at http://www.modern.ie/, but I'm finding these to be extremely cumbersome, buggy and sluggish. Is there a better way? How are you guys testing now?",
    votes: [3],
    submitedBy: 2,
    createdAt: new Date()
  }
]