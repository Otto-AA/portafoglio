import { getProjects } from '$lib/projects/projects';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	const projects = getProjects();

	return { projects };
};
