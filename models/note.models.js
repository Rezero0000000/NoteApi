import { Sequelize } from "sequelize";
import db from "../models/index.js";

const { DataTypes } = Sequelize;

const Notes = db.define("notes", {
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    clear: {
        type: DataTypes.BOOLEAN
    }
},
{
    freezeTableName: true
})

export default Notes;
