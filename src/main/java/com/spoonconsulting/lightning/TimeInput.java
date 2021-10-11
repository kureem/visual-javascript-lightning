package com.spoonconsulting.lightning;

import jsweet.lang.Array;
import jsweet.lang.Date;
import jsweet.lang.Object;

public class TimeInput extends BaseComboBox<Date>{

	private String min = "00:00";
	
	private String max = "23:30";
	
	
	public TimeInput(String name) {
		super(name);
		getInputIcon().setIconName("utility:clock");
	}
	
	
	@Override
	protected Date encode(String s) {
		if(s == null) {
			return null;
		} 
		
		if(s == "") {
			return null;
		}
		String[] parts = s.split(":");
		Date dt = new Date();
		dt.setHours(Integer.parseInt(parts[0]));
		dt.setMinutes(Integer.parseInt(parts[1]));
		return dt;
	}


	@Override
	protected String decode(Date t) {
		if(t == null) {
			return "";
		}
		double hrs = t.getHours();
		double mins = t.getMinutes();
		return to2dp(hrs) + ":" + to2dp(mins);
	}
	
	private String to2dp (double i) {
		return i <10? "0" + i : i+"";
	}


	public void refresh() {
		String[] start = min.split(":");
		String[] end = max.split(":");
		
		int startHr = Integer.parseInt(start[0]);
		int startMin = Integer.parseInt(start[1]);
		int endHr = Integer.parseInt(end[0]);
		int endMin = Integer.parseInt(end[1]);
		
		Array<Object> options = new Array<Object>();
		for(int i = startHr; i <= endHr;i++) {
			Object zero = new Object();
			zero.$set("label", i<10? "0" +i + ":00" : i+":00");
			zero.$set("value", i<10? "0" +i + ":00" : i+":00");
			
			Object quater = new Object();
			quater.$set("label", i<10? "0" +i + ":15" : i+":15");
			quater.$set("value", i<10? "0" +i + ":15" : i+":15");
			
			
			Object half = new Object();
			half.$set("label", i<10? "0" +i + ":30" : i+":30");
			half.$set("value", i<10? "0" +i + ":30" : i+":30");
			
			
			Object tquater = new Object();
			tquater.$set("label", i<10? "0" +i + ":45" : i+":45");
			tquater.$set("value", i<10? "0" +i + ":45" : i+":45");
			
			
			if(i == startHr) {
				
				//12:00
				if(startMin <15) {
					options.push(zero);
				}
				
				if(startMin < 30) {
					options.push(quater);
				}
				
				if(startMin < 45) {
					options.push(half);
				}
				
				if(startMin < 60) {
					options.push(tquater);
				}
				
			}else if(i == endHr) {
				options.push(zero);
				if(endMin >=15) {
					options.push(quater);
				}
				if(endMin >=30) {
					options.push(half);
				}
				if(endMin >= 45) {
					options.push(tquater);
				}
			}else {
				options.push(zero);
				options.push(quater);
				options.push(half);
				options.push(tquater);
			}
			
			this.setOptions(options);
		}
		
	}

}
