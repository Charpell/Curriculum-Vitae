module.exports = {
  updated: new Date(),
  expertise: [
    {
      title: 'JavaScript',
      years: '1',
      badges: ['DOM', 'Git workflow', 'Design Pattern', 'jQuery'],
      contents: `
        I have almost 3 Years experience building and working on enterprise grade applications with Javascript technologies. I'm really passionate about the Javascript language  because it offers me flexibility to develop for a wide range of platform ranging from web, mobile, desktop and more recently machine learning.
        More importantly, i write clean codes that follows guidelines/conventions (airbnb style guide). My codes are driven towards Test Driven Development(TDD) and follow the DRY principle during development. My code quality is awesome and I ensure this is consistent by integrating different Continuous Integrations tools in my projects.     
        I have a high proficiency in the following associated with Javascript frameworks/libraries; MERN (MongoDB, Express, React, Node)  and FRN (Firebase, React, Node) stack. I have also extended more knowledge of Javascript/React to mobile apps using React-Native technology.`
    },
    {
      title: 'React/React Native',
      years: '1',
      badges: ['Unit testing', 'Jest', 'React native', 'Babel', 'Npm', 'Firebase Database', 'Es6'],
      contents: `
        I've been working with React library everyday for the past year and I have built couple of personal and open source projects. 
        My most notable open source projects is the OpenmMrs project. The world's largest Medical Record system to improve health care delivery in resource-constrained environments by coordinating a global community to create and support this software.        
        I have used my experience with React and firbase to built apps for mobile using React-native. 
        I write test driven codes in React using the Jest framework and also experience in using React's most 2 notable state management library; Flux and Redux.`
    },
    {
      title: 'Node.js',
      years: '1',
      badges: ['Travis', 'Mocha', 'Unit testing', 'Express', 'Redis', 'MongoDB'],
      contents: `
      I love Nodejs because its fast, scalable and dynamic. More importantly it let me leverage the power of javascript to build server side tools. I have created API with both REST and Graphql. I have worked on different project ranging from simple web app to complex web app that requires a lot of integrations. 
      With Nodejs i am very productive in my daily activity as it allows me merge the front-end and back-end into a single entity makes it very much efficient.      
      I write test driven codes in Node using Mocha. I practice TDD and follow Single Responsiblity Principle during development. I have experience in node Continuous Integrations using Travis.`
    },
    {
      title: 'Heroku Deployment',
      years: '1',
      badges: ['Automation', 'Continous Deployment', 'Git workflow'],
      contents: `
        I have deployed javascript application to heroku. I can resolve issue encounter during deployment. I can also help integrate heroku adds-on`
    },
    {
      title: 'Git',
      years: '1',
      badges: ['Distributed Team', 'Github'],
      contents: `
        Git workflow make working in teams relatively easy. It has enable me and my team have seamless collaboration on our projects. i follow practice and naming convention with commits and pull request.`
    }
  ],

  employment: [
    {
      company: 'Andela',
      skills: ['Software Developer'],
      contents: `
        I am Full-stack developer at Andela. Andela, a global engineering organization that builds high-performance engineering teams. Andela is known for producing world class developers.`
    },
  ],

  projectExperience: [
    {
      projectName: 'PostIt',
      projectLink: 'https://post-it-app35.herokuapp.com/',
      githubLink: 'https://github.com/Charpell/post-it-app/tree/develop',
      projectDescription: `
        PostIt is a simple application that allows friends and colleagues create groups for notifications. This way one person can post notifications to everyone by sending a message once. The application allows people create accounts, create groups and add registered users to the groups, and then send messages out to these groups whenever they want.`,
      badges: ['Node.js', 'Express', 'React', 'Flux', 'API', 'Firebase Database', 'Test Driven development'],
      year: '2017'
    },
    {
      projectName: 'Expensify',
      projectLink: 'https://expensify101.herokuapp.com/',
      githubLink: 'https://github.com/Charpell/Expensify',
      projectDescription: `
        An app to manage your Daily Expenses. 
        Expensify adds past or future income and expenses to a calendar that calculates the impact on your balance, as well as spending by category. Its best for folks who have a handle on their finances but want a handy space to keep organized.`,
      badges: ['Node.js', 'Express', 'React', 'Redux', 'API', 'Firebase Database', 'Test Driven development', 'Jest'],
      year: '2018'
    },
    {
      projectName: 'Open Medical Record System',
      projectLink: 'https://modules-refapp.openmrs.org/',
      githubLink: 'https://github.com/Charpell/openmrs-owa-addonmanager',
      projectDescription: `
        OpenMRS is a software platform and a reference application which enables design of a customized medical records system with no programming knowledge (although medical and systems analysis knowledge is required). It is a common platform upon which medical informatics efforts in developing countries can be built. The system is based on a conceptual database structure which is not dependent on the actual types of medical information required to be collected or on particular data collection forms and so can be customized for different uses.`,
      badges: ['Java', 'Spring', 'React', 'Redux', 'API', 'MySQL Database', 'Test Driven development'],
      year: '2017'
    },
    {
      projectName: 'PyChat',
      projectLink: 'https://pychat101.herokuapp.com/',
      githubLink: 'https://github.com/Charpell/Pychat',
      projectDescription: `
        Pychat aims to make the world a better place by bringing like-minded people together.
        It makes this possible by letting you talk and chat with random strangers all over the world.`,
      badges: ['Node.js', 'Socket.IO', 'Test Driven development'],
      year: '2018'
    }
  ]
};