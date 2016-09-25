function(context, args)
{
	if(args && args.target) {
		var a = args.target.call({});
		return a+a;
	}
	return "HELO";
}
