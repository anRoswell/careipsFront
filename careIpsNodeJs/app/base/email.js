const nodemailer = require('nodemailer')
const { emailOutllook } = require('./../config/')
const log4js = require('./../base/log4js')()

const email = emailOutllook

class Email {
	async emailVerificationRegister(data) {
		try {
			const codVerificacion = new Date().getMilliseconds()
			const transporter = nodemailer.createTransport(email)
			const mailOptions = {
				from: `"Aseo Capital Panamá" <verificationmobile@aseocapital.com.pa>`,
				to: data.usr_email,
				subject: `Validar email registro de app Aseo Capital Panamá: ${data.usr_nameComplete}`,
				text: 'Por favor registrar este codigo en la App para validar su correo electronico',
				html: ` <div style="margin:0;padding:0" dir="ltr" bgcolor="#ffffff">
						<table border="0" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse">
							<tbody>
								<tr>
									<td style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;background:#ffffff">
										<table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
											<tbody>
												<tr>
													<td height="20" style="line-height:20px" colspan="3">&nbsp;</td>
												</tr>
												<tr>
													<td height="1" colspan="3" style="line-height:1px">
														<span style="color:#ffffff;font-size:1px">&nbsp; Hola, ${1}: Hemos recibido una transacción de pago  . &nbsp;
														</span>
													</td>
												</tr>
												<tr>
													<td width="15" style="display:block;width:15px">&nbsp;&nbsp;&nbsp;</td>
													<td>
													<table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
														<tbody>
															<tr>
																<td height="15" style="line-height:15px" colspan="3">&nbsp;</td>
															</tr>
															<tr>
																<td width="100%" style="background:url(https://panamatoolkitnodejs.syspotec.co:8182/imgs/AseoCapitalBackground.png) no-repeat; height: 64px; background-size: contain;text-align: center;">    
																	<span style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:19px;line-height:32px;color:white;">
																		Aseo Capital Panamá
																	</span>
																</td>
															</tr>
															<tr style="border-bottom:solid 1px #e5e5e5">
																<td height="15" style="line-height:15px" colspan="3">&nbsp;</td>
															</tr>
														</tbody>
													</table>
													</td>
													<td width="15" style="display:block;width:15px">&nbsp;&nbsp;&nbsp;</td>
												</tr>
												<tr>
													<td width="15" style="display:block;width:15px">&nbsp;&nbsp;&nbsp;</td>
													<td>
													<table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
														<tbody>
															<tr>
																<td height="28" style="line-height:28px">&nbsp;</td>
															</tr>
															<tr>
																<td>
																<span class="m_-7615546015233511716mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823">
																	<p>Hola, ${2}:</p>
																	<p></p>
																	<div>A continuacion encontrará el código </div>
																	<div>de verificación para su proceso</div>
																	<div>de registro.</div>
																	<br \>
																</span>
																	<div><strong>Aseo Capital Panamá</strong></div>
																	<table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin-top:9px;margin-bottom:15px">
																		<tbody>
																			<tr>
																				<td style="font-size:11px;font-family:LucidaGrande,tahoma,verdana,arial,sans-serif;padding:10px;background-color:#f2f2f2;border-left:1px solid #ccc;border-right:1px solid #ccc;border-top:1px solid #ccc;border-bottom:1px solid #ccc">
																					<span class="m_-7615546015233511716mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823">
																						Codigo de verificación: 
																					</span>
																				</td>
																				<td style="font-size:11px;font-family:LucidaGrande,tahoma,verdana,arial,sans-serif;padding:10px;background-color:#f2f2f2;border-left:1px solid #ccc;border-right:1px solid #ccc;border-top:1px solid #ccc;border-bottom:1px solid #ccc">
																					<span class="m_-7615546015233511716mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823">
																						${3}
																					</span>
																				</td>
																			</tr>                           
																		</tbody>
																	</table>
																	<p></p>
																	<div>
																		<span style="color:#333333;font-weight:bold">Por favor digitar en la App.</span>
																	</div>
																</span>
																</td>
															</tr>
															<tr>
																<td height="28" style="line-height:28px">&nbsp;</td>
															</tr>
														</tbody>
													</table>
													</td>
													<td width="15" style="display:block;width:15px">&nbsp;&nbsp;&nbsp;</td>
												</tr>
												<tr>
													<td width="15" style="display:block;width:15px">&nbsp;&nbsp;&nbsp;</td>
													<td>
													<table border="0" width="100%" cellspacing="0" cellpadding="0" align="left" style="border-collapse:collapse">
														<tbody>
															<tr style="border-top:solid 1px #e5e5e5">
																<td height="19" style="line-height:19px">&nbsp;</td>
															</tr>
															<tr>
																<td style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:11px;color:#aaaaaa;line-height:16px">Este mensaje se envió a <a href="mailto:${
																	data.usr_email
																}" style="color:#3b5998;text-decoration:none" target="_blank">${
					data.usr_email
				}</a>.<br>Aseo Capital Panamá
																</td>
															</tr>
														</tbody>
													</table>
													</td>
													<td width="15" style="display:block;width:15px">&nbsp;&nbsp;&nbsp;</td>
												</tr>
												<tr>
													<td height="20" style="line-height:20px" colspan="3">&nbsp;</td>
												</tr>
											</tbody>
										</table>
										<span>
											<img src="https://ci4.googleusercontent.com/proxy/SiK8VDnWaFNj2PnsZf3Z9lw3hNQKl0VexSxBubxrQDKpkVhdgg7zJYnN3CO6yoNV7wFjEAQKW9L2qJcZYPSLXwdh6EXqil8NLrgD7eC97o0aCL2fPFUBNvL7s1cKfknfgDCm-TmMvkUy7ieq4yJB=s0-d-e1-ft#https://www.facebook.com/email_open_log_pic.php?mid=5a6928bb979f8G4018348bG5a692d54f7ccaG178" style="border:0;width:1px;height:1px" class="CToWUd">
										</span>
									</td>
								</tr>
							</tbody>
						</table>
			</div>
              `,
			}
			return new Promise((resolve, reject) => {
				transporter.sendMail(mailOptions, function (err, data) {
					if (err) {
						reject('Error ' + err)
					} else {
						resolve({ codVerificacion })
					}
				})
			})
		} catch (e) {
			console.log(e)
			log4js.error(`[action: email sendEmail][msg: ${e.message}][file:${__filename}]`)
			throw new Error('Server error interno')
		}
	}

	async recoveryPass(data) {
		try {
			const codVerificacion = new Date().getMilliseconds()
			let transporter = nodemailer.createTransport(email)
			const mailOptions = {
				from: `"Aseo Capital Panamá" <verificationmobile@aseocapital.com.pa>`,
				to: data.usr_email,
				subject: `Código de recuperación de tu cuenta para la app Aseo Capital Panamá`,
				text: 'Por favor registrar este codigo en la App para validar su correo electronico',
				html: `
						<div style="margin:0;padding:0" dir="ltr" bgcolor="#ffffff">
							<table border="0" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse">
								<tbody>
									<tr>
										<td style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;background:#ffffff">
											<table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
												<tbody>
													<tr>
														<td height="20" style="line-height:20px" colspan="3">&nbsp;</td>
													</tr>
													<tr>
														<td height="1" colspan="3" style="line-height:1px">
															<span style="color:#ffffff;font-size:1px">&nbsp; Hola, ${data.usr_nameComplete}: Hemos recibido una transacción de pago  . &nbsp;
															</span>
														</td>
													</tr>
													<tr>
														<td width="15" style="display:block;width:15px">&nbsp;&nbsp;&nbsp;</td>
														<td>
														<table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
															<tbody>
																<tr>
																	<td height="15" style="line-height:15px" colspan="3">&nbsp;</td>
																</tr>
																<tr>
																	<td width="100%" style="background:url(https://panamatoolkitnodejs.syspotec.co:8182/imgs/AseoCapitalBackground.png) no-repeat; height: 64px; background-size: contain;text-align: center;">    
																		<span style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:19px;line-height:32px;color:white;">
																			Aseo Capital Panamá
																		</span>
																	</td>
																</tr>
																<tr style="border-bottom:solid 1px #e5e5e5">
																	<td height="15" style="line-height:15px" colspan="3">&nbsp;</td>
																</tr>
															</tbody>
														</table>
														</td>
														<td width="15" style="display:block;width:15px">&nbsp;&nbsp;&nbsp;</td>
													</tr>
													<tr>
														<td width="15" style="display:block;width:15px">&nbsp;&nbsp;&nbsp;</td>
														<td>
														<table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
															<tbody>
																<tr>
																	<td height="28" style="line-height:28px">&nbsp;</td>
																</tr>
																<tr>
																	<td>
																	<span class="m_-7615546015233511716mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823">
																		<p>Hola, ${data.usr_nameComplete}:</p>
																		<p></p>
																		<div>A continuacion encontrará el código </div>
																		<div>de verificación para su proceso</div>
																		<div>de registro.</div>
																		<br \>
																	</span>
																		<div><strong>Aseo Capital Panamá</strong></div>
																		<table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin-top:9px;margin-bottom:15px">
																			<tbody>
																				<tr>
																					<td style="font-size:11px;font-family:LucidaGrande,tahoma,verdana,arial,sans-serif;padding:10px;background-color:#f2f2f2;border-left:1px solid #ccc;border-right:1px solid #ccc;border-top:1px solid #ccc;border-bottom:1px solid #ccc">
																						<span class="m_-7615546015233511716mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823">
																							Codigo de verificación: 
																						</span>
																					</td>
																					<td style="font-size:11px;font-family:LucidaGrande,tahoma,verdana,arial,sans-serif;padding:10px;background-color:#f2f2f2;border-left:1px solid #ccc;border-right:1px solid #ccc;border-top:1px solid #ccc;border-bottom:1px solid #ccc">
																						<span class="m_-7615546015233511716mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823">
																							${codVerificacion}
																						</span>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																		<p></p>
																		<div>
																			<span style="color:#333333;font-weight:bold">Por favor digitar en la App.</span>
																		</div>
																	</span>
																	</td>
																</tr>
																<tr>
																	<td height="28" style="line-height:28px">&nbsp;</td>
																</tr>
															</tbody>
														</table>
														</td>
														<td width="15" style="display:block;width:15px">&nbsp;&nbsp;&nbsp;</td>
													</tr>
													<tr>
														<td width="15" style="display:block;width:15px">&nbsp;&nbsp;&nbsp;</td>
														<td>
														<table border="0" width="100%" cellspacing="0" cellpadding="0" align="left" style="border-collapse:collapse">
															<tbody>
																<tr style="border-top:solid 1px #e5e5e5">
																	<td height="19" style="line-height:19px">&nbsp;</td>
																</tr>
																<tr>
																	<td style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:11px;color:#aaaaaa;line-height:16px">Este mensaje se envió a <a href="mailto:${data.usr_email}" style="color:#3b5998;text-decoration:none" target="_blank">${data.usr_email}</a>.<br>Aseo Capital Panamá
																	</td>
																</tr>
															</tbody>
														</table>
														</td>
														<td width="15" style="display:block;width:15px">&nbsp;&nbsp;&nbsp;</td>
													</tr>
													<tr>
														<td height="20" style="line-height:20px" colspan="3">&nbsp;</td>
													</tr>
												</tbody>
											</table>
											<span>
												<img src="https://ci4.googleusercontent.com/proxy/SiK8VDnWaFNj2PnsZf3Z9lw3hNQKl0VexSxBubxrQDKpkVhdgg7zJYnN3CO6yoNV7wFjEAQKW9L2qJcZYPSLXwdh6EXqil8NLrgD7eC97o0aCL2fPFUBNvL7s1cKfknfgDCm-TmMvkUy7ieq4yJB=s0-d-e1-ft#https://www.facebook.com/email_open_log_pic.php?mid=5a6928bb979f8G4018348bG5a692d54f7ccaG178" style="border:0;width:1px;height:1px" class="CToWUd">
											</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
            `,
			}
			return new Promise((resolve, reject) => {
				transporter.sendMail(mailOptions, function (err, data) {
					if (err) {
						reject('Error ' + err)
					} else {
						resolve({ codVerificacion })
					}
				})
			})
		} catch (e) {
			log4js.error(`[action: email recoverypass][msg: ${e.message}][file:${__filename}]`)
			throw new Error('Server error interno')
		}
	}

	async emailAsignarUser(fields) {
		try {
			const codVerificacion = new Date().getMilliseconds()
			const transporter = nodemailer.createTransport(email)
			const mailOptions = {
				from: `"Aseo Capital Panamá" <verificationmobile@aseocapital.com.pa>`,
				to: fields.email,
				subject: `Validar email registro de app Aseo Capital Panamá: ${1}`,
				text: 'Por favor registrar este codigo en la App para validar su correo electronico',
				html: ` <div style="margin:0;padding:0" dir="ltr" bgcolor="#ffffff">
						<table border="0" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse">
							<tbody>
								<tr>
									<td style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;background:#ffffff">
										<table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
											<tbody>
												<tr>
													<td height="20" style="line-height:20px" colspan="3">&nbsp;</td>
												</tr>
												<tr>
													<td height="1" colspan="3" style="line-height:1px">
														<span style="color:#ffffff;font-size:1px">&nbsp; Hola, ${
															fields.cedula
														}: Se le ha invitado a registrarse en la App XXXXXX . &nbsp;
														</span>
													</td>
												</tr>
												<tr>
													<td width="15" style="display:block;width:15px">&nbsp;&nbsp;&nbsp;</td>
													<td>
													<table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
														<tbody>
															<tr>
																<td height="15" style="line-height:15px" colspan="3">&nbsp;</td>
															</tr>
															<tr>
																<td width="100%" style="background:url(https://panamatoolkitnodejs.syspotec.co:8182/imgs/AseoCapitalBackground.png) no-repeat; height: 64px; background-size: contain;text-align: center;">    
																
																</td>
															</tr>
															<tr style="border-bottom:solid 1px #e5e5e5">
																<td height="15" style="line-height:15px" colspan="3">&nbsp;</td>
															</tr>
														</tbody>
													</table>
													</td>
													<td width="15" style="display:block;width:15px">&nbsp;&nbsp;&nbsp;</td>
												</tr>
												<tr>
													<td width="15" style="display:block;width:15px">&nbsp;&nbsp;&nbsp;</td>
													<td>
													<table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
														<tbody>
															<tr>
																<td height="28" style="line-height:28px">&nbsp;</td>
															</tr>
															<tr>
																<td>
																<span class="m_-7615546015233511716mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823">
																	<p>Hola, ${fields.cedula}:</p>
																	<p></p>
																	<div>A continuacion encontrará el código </div>
																	<div>de verificación para su proceso</div>
																	<div>de registro en la app xxxxxxx.</div>
																	<br \>
																</span>
																	<div><strong>Aseo Capital Panamá</strong></div>
																	<table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin-top:9px;margin-bottom:15px">
																		<tbody>
																			<tr>
																				<td style="font-size:11px;font-family:LucidaGrande,tahoma,verdana,arial,sans-serif;padding:10px;background-color:#f2f2f2;border-left:1px solid #ccc;border-right:1px solid #ccc;border-top:1px solid #ccc;border-bottom:1px solid #ccc">
																					<span class="m_-7615546015233511716mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823">
																						Codigo de verificación: 
																					</span>
																				</td>
																				<td style="font-size:11px;font-family:LucidaGrande,tahoma,verdana,arial,sans-serif;padding:10px;background-color:#f2f2f2;border-left:1px solid #ccc;border-right:1px solid #ccc;border-top:1px solid #ccc;border-bottom:1px solid #ccc">
																					<span class="m_-7615546015233511716mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823">
																						${5}
																					</span>
																				</td>
																			</tr>
																		</tbody>
																	</table>
																	<p></p>
																	<div>
																		<span style="color:#333333;font-weight:bold">Por favor digitar en la App.</span>
																	</div>
																</span>
																</td>
															</tr>
															<tr>
																<td height="28" style="line-height:28px">&nbsp;</td>
															</tr>
														</tbody>
													</table>
													</td>
													<td width="15" style="display:block;width:15px">&nbsp;&nbsp;&nbsp;</td>
												</tr>
												<tr>
													<td width="15" style="display:block;width:15px">&nbsp;&nbsp;&nbsp;</td>
													<td>
													<table border="0" width="100%" cellspacing="0" cellpadding="0" align="left" style="border-collapse:collapse">
														<tbody>
															<tr style="border-top:solid 1px #e5e5e5">
																<td height="19" style="line-height:19px">&nbsp;</td>
															</tr>
															<tr>
																<td style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:11px;color:#aaaaaa;line-height:16px">Este mensaje se envió a <a href="mailto:${5}" style="color:#3b5998;text-decoration:none" target="_blank">${6}</a>.<br>Aseo Capital Panamá
																</td>
															</tr>
														</tbody>
													</table>
													</td>
													<td width="15" style="display:block;width:15px">&nbsp;&nbsp;&nbsp;</td>
												</tr>
												<tr>
													<td height="20" style="line-height:20px" colspan="3">&nbsp;</td>
												</tr>
											</tbody>
										</table>
										<span>
											<img src="https://ci4.googleusercontent.com/proxy/SiK8VDnWaFNj2PnsZf3Z9lw3hNQKl0VexSxBubxrQDKpkVhdgg7zJYnN3CO6yoNV7wFjEAQKW9L2qJcZYPSLXwdh6EXqil8NLrgD7eC97o0aCL2fPFUBNvL7s1cKfknfgDCm-TmMvkUy7ieq4yJB=s0-d-e1-ft#https://www.facebook.com/email_open_log_pic.php?mid=5a6928bb979f8G4018348bG5a692d54f7ccaG178" style="border:0;width:1px;height:1px" class="CToWUd">
										</span>
									</td>
								</tr>
							</tbody>
						</table>
			</div>
              `,
			}
			return new Promise((resolve, reject) => {
				transporter.sendMail(mailOptions, function (err, data) {
					if (err) {
						reject('Error ' + err)
					} else {
						resolve({ codVerificacion })
					}
				})
			})
		} catch (e) {
			console.log(e)
			log4js.error(`[action: email emailAsignarUser][msg: ${e.message}][file:${__filename}]`)
			throw new Error('Server error interno')
		}
	}
}

module.exports = Email
