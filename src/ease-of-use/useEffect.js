import { afterUpdate, onDestroy } from 'svelte';

function useEffect(cb, deps) {
	let cleanup;
	
	function apply() {
		if (cleanup) cleanup();
		cleanup = cb();
	}
	
	if (deps) {
		let values:any[] = [];
		afterUpdate(() => {
			const new_values = deps();
			if (new_values.some((value, i) => value !== values[i])) {
				apply();
				values = new_values;
			}
		});
	} else {
		// no deps = always run
		afterUpdate(apply);
	}
	
	onDestroy(() => {
		if (cleanup) cleanup();
	});
}

export default useEffect;