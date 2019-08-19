// importando do 'mongoose'
const { Schema, model } = require('mongoose');

// criando a estrutura da tabela do banco de dados
const devSchema = new Schema({
    name : {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'dev'
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'dev'
    }],
}, {
// createdAt armazena data da criação do ususario na aplicação
// updatedAt armazena a ultima atualização desse registro
    timestamps: true,
});

module.exports = model('dev', devSchema);
