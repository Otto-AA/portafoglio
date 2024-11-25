import type { Project } from './IProject';

export const projects: Project[] = [
	{
		name: 'SolidCryptPad',
		stack: ['Angular', 'Solid protocol'],
		repository: 'https://github.com/solidcryptpad/solidcryptpad',
		summary: 'Collaborative and E2E encrypted text editor'
	},
	{
		name: 'CardWiki',
		stack: ['Angular', 'Spring Boot'],
		repository: 'https://github.com/cardwiki/cardwiki',
		summary: 'Wiki-like flashcard application'
	},
	{
		name: 'Piano Visualization',
		stack: ['Javascript', 'Flask'],
		repository: 'https://github.com/Otto-AA/piano-visualizer',
		summary: 'Visualization of MIDI files'
	},
	{
		name: 'Campus Meet',
		stack: ['React Native', 'Firebase'],
		repository: 'https://github.com/otto-aa/Campus-Meet',
		summary: 'Mobile app to foster spontaneous meetups'
	},
	{
		name: 'Solid Filemanager',
		stack: ['React', 'Solid protocol'],
		repository: 'https://github.com/Otto-AA/solid-filemanager/',
		summary: 'File explorer for Solid pods'
	},
	{
		name: 'EVM Traces Parser',
		stack: ['Python'],
		repository: 'https://github.com/TOD-theses/traces_parser',
		summary: 'EVM traces parser with data flow analysis'
	}
];
