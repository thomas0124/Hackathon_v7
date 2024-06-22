"use client";

import { useState, ChangeEvent, FormEvent } from "react";

const Search: React.FC = () => {
	const [query, setQuery] = useState<string>("");

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		// 検索ロジックをここに追加
		console.log(query);
	};

	return (
		<form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
			<div className="flex items-center border-b border-teal-500 py-2">
				<input
					className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
					type="text"
					placeholder="Search..."
					aria-label="Search"
					value={query}
					onChange={handleInputChange}
				/>
				<button
					className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
					type="submit"
				>
					Search
				</button>
			</div>
		</form>
	);
};

export default Search;
