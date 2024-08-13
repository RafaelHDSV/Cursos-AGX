// uso de Contexto para criar muitos subtítulos dentro de seções e seções, com o level sendo passado por useContext()

import Heading from './Heading.jsx';
import Section from './Section.jsx';

import './App.css';

export default function Page() {
	return (
		<Section level={1}>
			<Heading>Title 1</Heading>
			<Heading>Title 1</Heading>
			<Heading>Title 1</Heading>

			<Section level={2}>
				<Heading>Heading 2</Heading>
				<Heading>Heading 2</Heading>
				<Heading>Heading 2</Heading>

				<Section level={3}>
					<Heading>Sub-heading 3</Heading>
					<Heading>Sub-heading 3</Heading>
					<Heading>Sub-heading 3</Heading>

					<Section level={4}>
						<Heading>Sub-sub-heading 4</Heading>
						<Heading>Sub-sub-heading 4</Heading>
						<Heading>Sub-sub-heading 4</Heading>

						<Section level={5}>
							<Heading>Sub-sub-heading 5</Heading>
							<Heading>Sub-sub-heading 5</Heading>
							<Heading>Sub-sub-heading 5</Heading>

							<Section level={6}>
								<Heading>Sub-sub-heading 6</Heading>
								<Heading>Sub-sub-heading 6</Heading>
								<Heading>Sub-sub-heading 6</Heading>

								<Section level={7}>
									<Heading>Paragraph</Heading>
									<Heading>Paragraph</Heading>
									<Heading>Paragraph</Heading>

									<Section level={8}>
										<Heading>
											Paragraph bold
										</Heading>
										<Heading>
											Paragraph bold
										</Heading>
										<Heading>
											Paragraph bold
										</Heading>

										<Section level={9}>
											<Heading>Span</Heading>
											<Heading>Span</Heading>
											<Heading>Span</Heading>

											<Section level={10}>
												<Heading>
													Span italic
												</Heading>
												<Heading>
													Span italic
												</Heading>
												<Heading>
													Span italic
												</Heading>
											</Section>
										</Section>
									</Section>
								</Section>
							</Section>
						</Section>
					</Section>
				</Section>
			</Section>
		</Section>
	);
}
