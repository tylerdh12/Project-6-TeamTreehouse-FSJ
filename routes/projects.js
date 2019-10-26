const express = require('express');
const project = express.Router();
const { data } = require('../data.json');
const { projects } = data;

project.get('/', (req, res) => {
    const { id } = req.params;
    res.render('index', { 
        id: projects[req.params.id].id,
        project_name: projects[req.params.id].project_name, 
        description: projects[req.params.id].description, 
        technologies: projects[req.params.id].technologies, 
        live_link: projects[req.params.id].live_link,
        github_link: projects[req.params.id].github_link, 
        image_urls: projects[req.params.id].image_urls, 
        status: projects[req.params.id].status
    });
});

project.get('/:id', ( req, res ) => {
    const { id } = req.params;
    res.render('project', { 
         id: projects[req.params.id].id,
        project_name: projects[req.params.id].project_name, 
        description: projects[req.params.id].description, 
        technologies: projects[req.params.id].technologies, 
        live_link: projects[req.params.id].live_link,
        github_link: projects[req.params.id].github_link, 
        image_urls: projects[req.params.id].image_urls, 
        status: projects[req.params.id].status
     });
});

module.exports = project;
