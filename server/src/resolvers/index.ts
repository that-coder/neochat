export function greet(_: void, { name }: { name: string }) {
	return `Hello, ${name || "there"}!`
}

export default {
	Query: {
		greet
	}
}
