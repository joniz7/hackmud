function(context, args)
{
	var ret = args.target.call({show:args.show});
	if (ret) {
		#s.chats.tell({to:"storfeting", msg:typeof ret});
		#s.chats.tell({to:"storfeting", msg:"length: "+ret.length});

		if (typeof ret === 'object') {
			var totstring = "";
			for(var k in ret) {
				//#s.chats.tell({to:"storfeting", msg:"line "+k+": "+ret[k]});
				if(ret[k].includes(args.search)) {
					totstring += ret[k];
				}
			}

			#s.chats.tell({to:"storfeting", msg:totstring});
		}

		return true;
	}
	return false;
}
