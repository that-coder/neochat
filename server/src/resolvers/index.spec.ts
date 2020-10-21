import { greet } from './index'

test('greet resolver', () => {
	const name = "Khubo"
	const result: any = greet(undefined, { name })
	expect(result).toBe(`Hello, ${name}!`)
})
