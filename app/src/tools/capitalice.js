export default function capitalize(
	value,
) {
	return value
		.split("-")
		.map((el) =>
			el
				.split(
					"",
				)
				.map(
					(
						str,
						i,
					) =>
						i
							? str
							: str.toUpperCase(),
				)
				.join(
					"",
				),
		)
		.join(" ");
}
