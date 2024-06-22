"use client";

import { useState, ChangeEvent, FormEvent } from "react";

const Search: React.FC = () => {
    const [sourceAbstract, setSourceAbstract] = useState<string>("");
    const [query, setQuery] = useState<string>("");
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSourceAbstractChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setSourceAbstract(e.target.value);
    };

    const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

		console.log("A")

        try {
            const response = await fetch("https://hackathonvol7api-production.up.railway.app/similarity/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    source_abstract: sourceAbstract,
                    query: query,
                    max_results: 10,
                }),
            });
			console.log("B")
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            const data = await response.json();
            setResults(data);
        } catch (err: any) {
			console.log("C")
            setError(err.message);
        } finally {
			console.log("D")
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="my-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sourceAbstract">
                        Source Abstract
                    </label>
                    <textarea
                        id="sourceAbstract"
                        className="appearance-none bg-transparent border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        placeholder="Enter the source abstract..."
                        value={sourceAbstract}
                        onChange={handleSourceAbstractChange}
                        rows={4}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="query">
                        Query
                    </label>
                    <input
                        id="query"
                        className="appearance-none bg-transparent border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={handleQueryChange}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Search
                    </button>
                </div>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex flex-wrap">
                {results.map((result, index) => (
                    <div key={index} className="w-full p-2">
                        <div className="bg-white shadow-md rounded p-4">
                            <h3 className="text-lg font-semibold">{result.title}</h3>
                            <p className="text-gray-700">{result.abstract}</p>
                            <a href={result.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Read more</a>
                            <p className="text-sm text-gray-500">Score: {result.score.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
