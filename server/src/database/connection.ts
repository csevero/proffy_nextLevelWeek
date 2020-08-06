import kenx from 'knex'
import knex from 'knex'
import path from 'path'

const db = knex({
	client: 'sqlite3',
	connection: {
		filename: path.resolve(__dirname, 'database.sqlite'),
	},
	useNullAsDefault: true, //dizendo para o sqlite definir nulo para os campos que não forem preenchidos
})

export default db
