import nunjucks from 'nunjucks'

// Configure Nunjucks
nunjucks.configure('src/templates', {
  autoescape: true
})

// Render template
const output = nunjucks.render('index.njk', {
  title: "Internship Task 2"
})

// Inject into page
document.body.innerHTML = output
