import React, { Component } from 'react';
import { get } from 'axios';

import Card from './card/Card';
import Preview from './preview/Preview';
import './Pokedex.scss';

export default class Pokedex extends Component {
    url = `https://pokeapi.co/api/v2`;
    state = {
			pokemons: [],
			selectedPokemon: {}
		}

		getPokemon(index = 1) {
			get(`${this.url}/pokemon/${index}/`)
				.then(
					({data}) => this.setState({selectedPokemon: data})
				)
		}

		handleClick(index) {
				this.getPokemon(index);
		}
    
		componentDidMount() {
			get(`${this.url}/pokemon`, { params: {limit: 251}})
				.then(res => {
					const pokemons = res.data.results.map((pokemon, index) => { return {name: pokemon.name, index: index + 1}});

					this.getPokemon();

					this.setState({
						pokemons: pokemons,
					})
				})
				.catch(console.error)
		}

    render() {
			const list = this.state.pokemons.map(element => {
				return <Card 
					key={element.index} 
					name={element.name} 
					onClick={(index) => this.handleClick(index)}
					index={element.index} 
				/>
			})

			const selectedPokemon = this.state.selectedPokemon;
			if (selectedPokemon) {
				console.log(selectedPokemon)
			}
			return (

				<div>
					<Preview 
						name={selectedPokemon.name}
						index={selectedPokemon.id}
						types={selectedPokemon.types}
					/>
					<div className="List-container">{list}</div>
				</div>
			);
		}
} 