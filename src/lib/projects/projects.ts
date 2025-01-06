import type { Project } from './IProject';

export const getProjects: () => Project[] = () => {
	return [
		{
			id: 'solidcryptpad',
			name: 'SolidCryptPad',
			stack: ['Angular', 'Solid protocol'],
			repository: 'https://github.com/solidcryptpad/solidcryptpad',
			summary: 'Collaborative and E2E-encrypted text editing'
		},
		{
			id: 'cardwiki',
			name: 'CardWiki',
			stack: ['Angular', 'Spring Boot'],
			repository: 'https://github.com/cardwiki/cardwiki',
			summary: 'Wiki-like flashcard application'
		},
		{
			id: 'piano-visualization',
			name: 'Piano Visualization',
			stack: ['Javascript', 'Flask'],
			repository: 'https://github.com/Otto-AA/piano-visualizer',
			summary: 'Visualization of MIDI files'
		},
		{
			id: 'campus-meet',
			name: 'Campus Meet',
			stack: ['React Native', 'Firebase'],
			repository: 'https://github.com/otto-aa/Campus-Meet',
			summary: 'Mobile app for spontaneous meetups'
		},
		{
			id: 'solid-filemanager',
			name: 'Solid Filemanager',
			stack: ['React', 'Solid protocol'],
			repository: 'https://github.com/Otto-AA/solid-filemanager/',
			summary: 'File explorer for Solid pods'
		},
		{
			id: 'evm-traces-parser',
			name: 'EVM Traces Parser',
			stack: ['Python'],
			repository: 'https://github.com/TOD-theses/traces_parser',
			summary: 'Data flow analysis of EVM traces'
		}
	];
};
