

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/portfoliodb',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
  