import React from "react";

const Projects = () => {
	const projects = [
		{
			titre: "chat_lachignol",
			description:
				"Messagerie en temps réel sur TCP chiffrée via SSL/TLS.",
			stack: "C.",
			lienGit: "https://github.com/Lachignol/chat_lachignol",
			lienActif: "",
		},
		{
			titre: "Chat de gouttière",
			description:
				"Création d’un site d’administration/création de course de vélo urbaine.",
			stack: "Node.Js-Express-Mongodb-React-Tailwind.",
			lienGit: "https://github.com/Lachignol/chat_de_gouttiere",
			lienActif: "",
		},
		{
			titre: "Pari d'ami",
			description: "Création d’une application mobile pour parier entre amis.",
			stack: "Golang-PostgreSQL-React-Native.",
			lienGit: "https://github.com/Lachignol/projet-mobile-pari_damis",
			lienActif: "",
		},
		{
			titre: "lachignol Blog",
			description:
				"blog en Go avec rendu de Markdown en HTML.",
			stack: "Golang.",
			lienGit: "https://github.com/Lachignol/lachignol--blog",
			lienActif: "https://blog.lachignol.com",
		},
		{
			titre: "Martin solving",
			description:
				"Application-cli multi-outils.",
			stack: "Golang-Cobra.",
			lienGit: "https://github.com/Lachignol/martin-solving",
			lienActif: "",
		},
		{
			titre: "Microblogging",
			description: "Création d’un blog.",
			stack: "Laravel(php)-PostgreSQL-Tailwinds.",
			lienGit:
				"https://github.com/Lachignol/projet-collectif-microblogging-alexandre-jeremie-claire",
			lienActif: "",
		},
		{
			titre: "Noyales",
			description: "Création d'un site E-commerce dédié à la vente de meubles.",
			stack: "Node.js-Express-MangoDb-React.",
			lienGit: "https://github.com/Lachignol/E-commerce-vente-de-meuble",
			lienActif: "",
		},
		{
			titre: "Voisinous",
			description: "Création d’un reseau social entre voisins.",
			stack: "Php-Mysql-Apache.",
			lienGit: "https://github.com/Lachignol/Reseau-social-php",
			lienActif: "",
		},
		{
			titre: "Jouvence",
			description:
				"Extension permetant de traduire une page web en langage de 'jeunes'.",
			stack: "Html-Css-Javascript.",
			lienGit: "https://github.com/Lachignol/Extension-navigateur",
			lienActif: "",
		},
	];

	return (
		<>
			<ul>
				{projects.map((project, index) => (
					<div key={index}>
						<h4 className="projet-titre">--{project.titre}--</h4>
						<li className="projet-description">{project.description}</li>
						<li className="projet-stack">Stack:{project.stack}</li>
						<li>
							<a href={project.lienGit} target="_blank">
								lien github
							</a>
						</li>
						{project.lienActif && (
							<li>
								<br>
								</br>
								<a href={project.lienActif} target="_blank">lien du site</a>
							</li>
						)}
					</div>
				))}
			</ul>
		</>
	);
};

export default Projects;
