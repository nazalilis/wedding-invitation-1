export default {
	props: ["year", "month", "date", "hour", "minute", "second", "milisecond"],
	data: () => ({
		displayDays: 0,
		displayHours: 0,
		displayMinutes: 0,
		displaySeconds: 0,
		loaded: false,
		expired: false,
	}),
	computed: {
		_seconds: () => 1000,
		_minutes() {
			return this._seconds * 60;
		},
		_hours() {
			return this._minutes * 60;
		},
		_days() {
			return this._hours * 24;
		},
		end() {
			return new Date(this.year, this.month, this.date, this.hour, this.minute, this.second, this.milisecond);
		},
	},
	mounted() {
		this.showRemaining(this.year, this.month, this.date, this.hour, this.minute, this.second, this.milisecond);
	},
	methods: {
		formatNum: (num) => (num < 10 ? "0" + num : num),
		showRemaining(year, month, date, hour, minute, second, milisecond) {
			const timer = setInterval(() => {
				const now = new Date();
				// const distance = this.end.getTime() - now.getTime();
				const distance = new Date(year, month, date, hour, minute, second, milisecond).getTime() - now.getTime();

				// console.log(this.end);
				if (distance < 0) {
					clearInterval(timer);
					this.expired = true;
					document.getElementById("countdown-display").style.display = "none";
					return;
				}

				const days = Math.floor(distance / this._days);
				const hours = Math.floor((distance % this._days) / this._hours);
				const minutes = Math.floor((distance % this._hours) / this._minutes);
				const seconds = Math.floor((distance % this._minutes) / this._seconds);
				this.displayDays = this.formatNum(days);
				this.displayHours = this.formatNum(hours);
				this.displayMinutes = this.formatNum(minutes);
				this.displaySeconds = this.formatNum(seconds);
				this.loaded = true;
			}, 1000);
		},
	},
};
