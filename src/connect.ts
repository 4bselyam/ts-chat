import mongoose from "mongoose";

export default (db: string) => {
	const connect = () => {
		mongoose
			.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
			.then(() => {
				return console.log(`[Successfully connected to database...]`);
			})
			.catch((error) => {
				console.log(`[An error occured while connecting to database: ${error}...]`);
				return process.exit(1);
			});
	};
	connect();

	mongoose.connection.on("disconnect", connect);
};
