import capitalize from '@/tools/capitalice';
import React from 'react';
const charts = ['culo', 'tetas', 'sexo'];
const finance = () => {
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
				<div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
						Finance
					</h2>
				</div>
				<div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
					{charts.map(
						chart => (
							<div
								key={
									chart
								}
								className="items-center justify-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
								<h3>
									{capitalize(
										chart,
									)}
								</h3>
							</div>
						),
					)}
				</div>
			</div>
		</section>
	);
};

export default finance;
