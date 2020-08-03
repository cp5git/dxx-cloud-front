const vFilter = {
	/**
	 * [subDepartment 名太为空...]
	 */
	filNull: function(value) {
		if (value == null || value == "") {
			return '-';
		} else {
			return value;
		}
	},
	/**
	 * [scoreToStartName 等级返回多少星级名称]
	 */
	levelToStart: function(value) {
		if(value == "1") return "一星";
		if(value == "2") return "二星";
		if(value == "3") return "三星";
		if(value == "4") return "四星";
		if(value == "5") return "五星";
		if(value == "6") return "六星";
		if(value == "7") return "七星";
		else return "无";
	}
}

export default vFilter
