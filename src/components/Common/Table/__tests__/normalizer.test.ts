import 'jest'
import { normalize } from '../noramlizer'
import * as cities from '../../../../data/cities.json'

describe('data normalizer test', () => {

    test('return array type with object keys matching to array itemsas (key value pairing)', () => {
        const data = {
            "test 1": [
                "1",
                "2"
            ],
            "test 2": [
                "3",
                "4"
            ]
        }

        const result = normalize(data)
        expect(result.length).toEqual(4)
        expect(result[0]).toEqual({ key: "test 1", value: "1" })
        expect(result[1]).toEqual({ key: "test 1", value: "2" })
        expect(result[2]).toEqual({ key: "test 2", value: "3" })
        expect(result[3]).toEqual({ key: "test 2", value: "4" })
    })

    test('returns array of key value pairs from cities json', () => {
        const result = normalize(cities)
        expect(result).not.toBeNull()
        expect(result.length).toBeGreaterThan(0)
    })
})