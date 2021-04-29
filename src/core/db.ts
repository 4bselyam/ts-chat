import mongoose from "mongoose";

mongoose.connect("mongodb+srv://4bselyam:a08102001@cluster0.iwdpr.mongodb.net/chat?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
});
