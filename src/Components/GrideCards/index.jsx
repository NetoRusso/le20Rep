import React from 'react';
import Style from './GridCards.module.css';
import Card from "../Card";
import img01 from "../../assets/Slide/Exemplo01.png";
import img02 from "../../assets/Slide/Exemplo02.png";
import img03 from "../../assets/Slide/Exemplo03.png";
import img04 from "../../assets/Slide/Exemplo04.png";
import img05 from "../../assets/Slide/Exemplo05.png";



const GridCards = () => {

	const props = [

		{
			nome: "Card 01",
			img01: img01,
			img02: img02,
			img03: img03,
			img04: img04,
			img05: img05,
			linkSite: "#",
			linkCatalogo: "#",
			linkCompartilhar: "#",
			descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec imperdiet ultrices, ante mi dapibus enim, quis imperdiet nunc nisi quis enim. Donec velit neque, dapibus nec libero a, sagittis aliquam nunc. Nullam eget nisi commodo, varius metus quis, vestibulum arcu. Morbi ut metus mauris. Aliquam erat volutpat. Nulla facilisi. Donec pulvinar quam vel risus pulvinar, sit amet elementum elit tincidunt. Maecenas ut enim erat."
		},

		{
			nome: "Card 02",
			img01: img01,
			img02: img02,
			img03: img03,
			img04: img04,
			img05: img05,
			linkSite: "#",
			linkCatalogo: "#",
			linkCompartilhar: "#",
			descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec imperdiet ultrices, ante mi dapibus enim, quis imperdiet nunc nisi quis enim. Donec velit neque, dapibus nec libero a, sagittis aliquam nunc. Nullam eget nisi commodo, varius metus quis, vestibulum arcu. Morbi ut metus mauris. Aliquam erat volutpat. Nulla facilisi. Donec pulvinar quam vel risus pulvinar, sit amet elementum elit tincidunt. Maecenas ut enim erat."
		},

		{
			nome: "Card 03",
			img01: img01,
			img02: img02,
			img03: img03,
			img04: img04,
			img05: img05,
			linkSite: "#",
			linkCatalogo: "#",
			linkCompartilhar: "#",
			descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec imperdiet ultrices, ante mi dapibus enim, quis imperdiet nunc nisi quis enim. Donec velit neque, dapibus nec libero a, sagittis aliquam nunc. Nullam eget nisi commodo, varius metus quis, vestibulum arcu. Morbi ut metus mauris. Aliquam erat volutpat. Nulla facilisi. Donec pulvinar quam vel risus pulvinar, sit amet elementum elit tincidunt. Maecenas ut enim erat."
		},

	];

	return (
		<div className={Style.container}>
			<Card
				titulo={props[0].nome}
				img01={props[0].img01}
				img02={props[0].img02}
				img03={props[0].img03}
				img04={props[0].img04}
				img05={props[0].img05}
				linkSite={props[0].linkSite}
				linkCatalogo={props[0].linkCatalogo}
				linkCompartilhar={props[0].linkCompartilhar}
				descricao={props[0].descricao}
			/>
			<Card
				titulo={props[1].nome}
				img01={props[1].img01}
				img02={props[1].img02}
				img03={props[1].img03}
				img04={props[1].img04}
				img05={props[1].img05}
				linkSite={props[1].linkSite}
				linkCatalogo={props[1].linkCatalogo}
				linkCompartilhar={props[1].linkCompartilhar}
				descricao={props[1].descricao}
			/>

			<Card
				titulo={props[2].nome}
				img01={props[2].img01}
				img02={props[2].img02}
				img03={props[2].img03}
				img04={props[2].img04}
				img05={props[2].img05}
				linkSite={props[2].linkSite}
				linkCatalogo={props[2].linkCatalogo}
				linkCompartilhar={props[2].linkCompartilhar}
				descricao={props[2].descricao}
			/>

		</div>
	)
};

export default GridCards;
