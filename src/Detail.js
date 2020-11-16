import React, { useState, useEffect } from 'react'
import { Switch, Route, Link, useParams } from 'react-router-dom'
import { Container, Row, Col, Card } from 'react-bootstrap'

export default function Detail({ data }) {
	const { id } = useParams()
	return (
		<>
			{data
				.filter((e) => e.sys.id === id)
				.map((e) => (
					<>
						<Container>
							<Row>
								<Col xs={12} md={10} xl={8}>
									<Card border='success'>
										<Card.Header>
											<Card.Img
												src={`http:${e.fields.image.fields.file.url}`}
												fluid
												rounded
											/>
											<Card.ImgOverlay>
												<Card.Title>{e.fields.title}</Card.Title>
												<Card.Subtitle className='mb-2'>
													{e.fields.description}
												</Card.Subtitle>
											</Card.ImgOverlay>
										</Card.Header>
										<Card.Body>
											<Card.Text>
												<ul>
													{e.fields.ingredients.content[0].content.map(
														(ingredient) => {
															return (
																<li>
																	{ingredient.content[0].content[0].value}
																</li>
															)
														}
													)}
												</ul>
												{e.fields.instructions}
											</Card.Text>
										</Card.Body>
									</Card>
								</Col>
							</Row>
						</Container>
					</>
				))}
		</>
	)
}
