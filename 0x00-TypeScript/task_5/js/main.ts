export interface MajorCredits {
	__brand: 'major';
	credits: number;
}

export interface MinorCredits {
	__brand: 'minor';
	credits: number;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
	return subject1.credits + subject2.credits;
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
	return subject1.credits + subject2.credits;
}

// credit: number;
