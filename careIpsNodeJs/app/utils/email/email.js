// TODO: Pasar la estructura del html a una funcionalidad independiente

const nodemailer = require('nodemailer')
const { emailOutllook } = require('../../config/')
const log4js = require('./../../base/log4js')()

const email = emailOutllook

console.log(email)

module.exports = {
	sendEmail: async (data) => {
		try {
			const codVerificacion = new Date().getMilliseconds()
			const transporter = nodemailer.createTransport(email)
			const mailOptions = {
				from: `"Electorpro" <admin@electorpro.com>`,
				to: data.usr_email,
				subject: `Validar email registro de app Electorpro: ${data.usr_nameComplete}`,
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
																<td width="100%" style="background:url(https://panamatoolkitnodejs.syspotec.co:8182/imgs/electorproBackground.png) no-repeat; height: 64px; background-size: contain;text-align: center;">    
																	<span style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:19px;line-height:32px;color:white;">
																		Electorpro
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
																	<div><strong>Electorpro</strong></div>
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
																<td style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:11px;color:#aaaaaa;line-height:16px">Este mensaje se envió a <a href="mailto:${data.usr_email}" style="color:#3b5998;text-decoration:none" target="_blank">${data.usr_email}</a>.<br>Electorpro
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
	},
	recoverypass: async (data) => {
		try {
			const codVerificacion = new Date().getMilliseconds()
			let transporter = nodemailer.createTransport(email)
			const mailOptions = {
				from: `"Electorpro" <admin@electorpro.com>`,
				to: data.email,
				subject: `Código de recuperación de tu cuenta para la app Electorpro`,
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
															<span style="color:#ffffff;font-size:1px">&nbsp; Hola, ${data.primerNombre}: Hemos recibido una transacción de pago  . &nbsp;
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
																	<td width="100%" style="background:url(https://panamatoolkitnodejs.syspotec.co:8182/imgs/electorproBackground.png) no-repeat; height: 64px; background-size: contain;text-align: center;">    
																		<span style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:19px;line-height:32px;color:white;">
																			Electorpro
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
																		<p>Hola, ${data.primerNombre}:</p>
																		<p></p>
																		<div>A continuacion encontrará el código </div>
																		<div>de verificación para su proceso</div>
																		<div>de registro.</div>
																		<br \>
																	</span>
																		<div><strong>Electorpro</strong></div>
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
																	<td style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:11px;color:#aaaaaa;line-height:16px">Este mensaje se envió a <a href="mailto:${data.usr_email}" style="color:#3b5998;text-decoration:none" target="_blank">${data.usr_email}</a>.<br>Electorpro
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
	},
	sendEmailTransaccionExitosa: async (data) => {
		try {
			const transporter = nodemailer.createTransport(email)
			const mailOptions = {
				from: `"Electorpro" <admin@electorpro.com.pa>`,
				to: data.usr_email,
				subject: `Confirmación pago por app de Electorpro: ${data.usr_nameComplete}`,
				text: '',
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
																		data.usr_nameComplete
																	}: Hemos recibido una transacción de pago  . &nbsp;
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
																			<td width="100%" style="background:url(https://panamatoolkitnodejs.syspotec.co:8182/imgs/electorproBackground.png) no-repeat; height: 64px; background-size: contain;text-align: center;">    
																				<span style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:19px;line-height:32px;color:white;">
																					Electorpro
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
																				<div>A continuacion encontrará el detalle del pago</div>
																				<div>realizado, traves de la app de</div>
																				<div><strong>Electorpro</strong></div>
																				<table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin-top:9px;margin-bottom:15px">
																					<tbody>
																						<tr>
																							<td style="font-size:11px;font-family:LucidaGrande,tahoma,verdana,arial,sans-serif;padding:10px;background-color:#f2f2f2;border-left:1px solid #ccc;border-right:1px solid #ccc;border-top:1px solid #ccc;border-bottom:1px solid #ccc">
																								<span class="m_-7615546015233511716mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823">
																									Cuenta contrato: 
																								</span>
																							</td>
																							<td style="font-size:11px;font-family:LucidaGrande,tahoma,verdana,arial,sans-serif;padding:10px;background-color:#f2f2f2;border-left:1px solid #ccc;border-right:1px solid #ccc;border-top:1px solid #ccc;border-bottom:1px solid #ccc">
																								<span class="m_-7615546015233511716mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823">
																									${data.CUENTACONTRATO}
																								</span>
																							</td>
																						</tr>
																						<tr>
																							<td style="font-size:11px;font-family:LucidaGrande,tahoma,verdana,arial,sans-serif;padding:10px;background-color:#f2f2f2;border-left:1px solid #ccc;border-right:1px solid #ccc;border-top:1px solid #ccc;border-bottom:1px solid #ccc">
																								<span class="m_-7615546015233511716mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823">
																									Usuario cta. contrato: 
																								</span>
																							</td>
																							<td style="font-size:11px;font-family:LucidaGrande,tahoma,verdana,arial,sans-serif;padding:10px;background-color:#f2f2f2;border-left:1px solid #ccc;border-right:1px solid #ccc;border-top:1px solid #ccc;border-bottom:1px solid #ccc">
																								<span class="m_-7615546015233511716mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823">
																									${data.usr_nameComplete}
																								</span>
																							</td>
																						</tr>
																						<tr>
																							<td style="font-size:11px;font-family:LucidaGrande,tahoma,verdana,arial,sans-serif;padding:10px;background-color:#f2f2f2;border-left:1px solid #ccc;border-right:1px solid #ccc;border-top:1px solid #ccc;border-bottom:1px solid #ccc">
																								<span class="m_-7615546015233511716mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823">
																									Nro transacción: 
																								</span>
																							</td>
																							<td style="font-size:11px;font-family:LucidaGrande,tahoma,verdana,arial,sans-serif;padding:10px;background-color:#f2f2f2;border-left:1px solid #ccc;border-right:1px solid #ccc;border-top:1px solid #ccc;border-bottom:1px solid #ccc">
																								<span class="m_-7615546015233511716mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823">
																									${data.idTransaccion}
																								</span>
																							</td>
																						</tr>
																						<tr>
																							<td style="font-size:11px;font-family:LucidaGrande,tahoma,verdana,arial,sans-serif;padding:10px;background-color:#f2f2f2;border-left:1px solid #ccc;border-right:1px solid #ccc;border-top:1px solid #ccc;border-bottom:1px solid #ccc">
																								<span class="m_-7615546015233511716mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823">
																									Monto: 
																								</span>
																							</td>
																							<td style="font-size:11px;font-family:LucidaGrande,tahoma,verdana,arial,sans-serif;padding:10px;background-color:#f2f2f2;border-left:1px solid #ccc;border-right:1px solid #ccc;border-top:1px solid #ccc;border-bottom:1px solid #ccc">
																								<span class="m_-7615546015233511716mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823">
																									$ ${data.amount}
																								</span>
																							</td>
																						</tr>  
																						<tr>
																							<td style="font-size:11px;font-family:LucidaGrande,tahoma,verdana,arial,sans-serif;padding:10px;background-color:#f2f2f2;border-left:1px solid #ccc;border-right:1px solid #ccc;border-top:1px solid #ccc;border-bottom:1px solid #ccc">
																								<span class="m_-7615546015233511716mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823">
																									Fecha: 
																								</span>
																							</td>
																							<td style="font-size:11px;font-family:LucidaGrande,tahoma,verdana,arial,sans-serif;padding:10px;background-color:#f2f2f2;border-left:1px solid #ccc;border-right:1px solid #ccc;border-top:1px solid #ccc;border-bottom:1px solid #ccc">
																								<span class="m_-7615546015233511716mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823">
																									${new Date()}
																								</span>
																							</td>
																						</tr>                                  
																					</tbody>
																				</table>
																				<p></p>
																				<div>
																					<span style="color:#333333;font-weight:bold">¿No solicitaste este pago?</span>
																				</div>
																				Si no realizastes pago, <a href="https://electorpro.com.pa/contacto/" style="color:#3b5998;text-decoration:none" target="_blank" ">avísanos</a>.
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
				}</a>.<br>Syspotec S.A.S, Carrera 15 No. 88 - 64 Torre Zimma
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
			log4js.error(`[action: email sendEmailTransaccionExitosa][msg: ${e.message}][file:${__filename}]`)
			throw new Error('Server error interno')
		}
	},
	sendEmailDashBoard: async (data) => {
		try {
			const transporter = nodemailer.createTransport(email)
			const mailOptions = {
				from: `"Electorpro" <admin@electorpro.com.pa>`,
				to: `${data.email}, atencionusuario@electorpro.com.pa`,
				subject: `Su ${data.operacion} a recibido una respuesta`,
				text: '',
				html: ` <div style="margin:0;padding:0" dir="ltr" bgcolor="#ffffff">
									<table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
										<tbody>
											<tr>
												<td style="background-color:#ffffff">
												<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; width:100%">
													<tbody>
														<tr>
															<td style="width:15px">&nbsp;&nbsp;&nbsp;</td>
															<td>
															<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; width:100%">
																<tbody>
																	<tr>
																			<td width="100%" style="background:url(https://panamatoolkitnodejs.syspotec.co:8182/imgs/electorproBackground.png) no-repeat; height: 64px; background-size: contain;text-align: center;">    
																				<span style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:19px;line-height:32px;color:white;">
																					Electorpro
																				</span>
																			</td>
																		</tr>
																</tbody>
															</table>
															</td>
															<td style="width:15px">&nbsp;&nbsp;&nbsp;</td>
														</tr>
														<tr>
															<td style="width:15px">&nbsp;&nbsp;&nbsp;</td>
															<td>
															<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; width:100%">
																<tbody>
																	<tr>
																		<td>&nbsp;</td>
																	</tr>
																	<tr>
																		<td>
																		<p>Hola, ${data.nameClient}:</p>

																		<p>Su solicitud de "${data.operacion}"...</p>

																		<p><strong>Solicitud generada:</strong></p>

																		<table border="0" cellpadding="5" cellspacing="1" style="border-collapse:collapse">
																			<tbody>
																				<tr>
																					<td style="background-color:#f2f2f2; border-bottom:1px solid #cccccc; border-left:1px solid #cccccc; border-right:1px solid #cccccc; border-top:1px solid #cccccc">Cuenta contrato:</td>
																					<td style="background-color:#f2f2f2; border-bottom:1px solid #cccccc; border-left:1px solid #cccccc; border-right:1px solid #cccccc; border-top:1px solid #cccccc">${
																						data.cuentaId
																					}</td>
																				</tr>
																				<tr>
																					<td style="background-color:#f2f2f2; border-bottom:1px solid #cccccc; border-left:1px solid #cccccc; border-right:1px solid #cccccc; border-top:1px solid #cccccc">Usuario cta. contrato:</td>
																					<td style="background-color:#f2f2f2; border-bottom:1px solid #cccccc; border-left:1px solid #cccccc; border-right:1px solid #cccccc; border-top:1px solid #cccccc">${
																						data.userCtaContrato
																					}</td>
																				</tr>
																				<tr>
																					<td style="background-color:#f2f2f2; border-bottom:1px solid #cccccc; border-left:1px solid #cccccc; border-right:1px solid #cccccc; border-top:1px solid #cccccc">Acci&oacute;n seleccionada:</td>
																					<td style="background-color:#f2f2f2; border-bottom:1px solid #cccccc; border-left:1px solid #cccccc; border-right:1px solid #cccccc; border-top:1px solid #cccccc">${
																						data.operacionSeleccionada
																					}</td>
																				</tr>
																				<tr>
																					<td style="background-color:#f2f2f2; border-bottom:1px solid #cccccc; border-left:1px solid #cccccc; border-right:1px solid #cccccc; border-top:1px solid #cccccc">Observación:</td>
																					<td style="background-color:#f2f2f2; border-bottom:1px solid #cccccc; border-left:1px solid #cccccc; border-right:1px solid #cccccc; border-top:1px solid #cccccc">
																					<div style="width:150px; height: 100%; text-align: justify;">${
																						data.observacion === 'undefined' ? '' : data.observacion
																					}</div>
																					</td>
																				</tr>
																				<tr>
																					<td style="background-color:#f2f2f2; border-bottom:1px solid #cccccc; border-left:1px solid #cccccc; border-right:1px solid #cccccc; border-top:1px solid #cccccc">Fecha solicitud:</td>
																					<td style="background-color:#f2f2f2; border-bottom:1px solid #cccccc; border-left:1px solid #cccccc; border-right:1px solid #cccccc; border-top:1px solid #cccccc">${
																						data.createdAt
																					}</td>
																				</tr>
																			</tbody>
																		</table>
																		<p><strong>Ha recibido una respuesta:</strong></p>

																		<div style="width:300px; height: 100%; text-align: justify;">
																			<p>${data.observation}</p>
																		</div>

																		</td>
																	</tr>
																</tbody>
															</table>
															</td>
															<td style="width:15px">&nbsp;&nbsp;&nbsp;</td>
														</tr>
														<tr>
															<td style="width:15px"><p></p><p></p></td>
															<td>
															<table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; width:100%">
																<tbody>
																	<tr>
																		<td>Este mensaje se envi&oacute; a <a href="mailto:${data.email}" target="_blank">${data.email}</a>.<br />
																		Aseo Capital Panam&aacute;</td>
																	</tr>
																</tbody>
															</table>
															</td>
															<td style="width:15px">&nbsp;&nbsp;&nbsp;</td>
														</tr>
														<tr>
															<td colspan="3">&nbsp;</td>
														</tr>
													</tbody>
												</table>
												<img src="https://ci4.googleusercontent.com/proxy/SiK8VDnWaFNj2PnsZf3Z9lw3hNQKl0VexSxBubxrQDKpkVhdgg7zJYnN3CO6yoNV7wFjEAQKW9L2qJcZYPSLXwdh6EXqil8NLrgD7eC97o0aCL2fPFUBNvL7s1cKfknfgDCm-TmMvkUy7ieq4yJB=s0-d-e1-ft#https://www.facebook.com/email_open_log_pic.php?mid=5a6928bb979f8G4018348bG5a692d54f7ccaG178" style="height:1px; width:1px" /></td>
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
			log4js.error(`[action: email sendEmailTransaccionExitosa][msg: ${e.message}][file:${__filename}]`)
			throw new Error('Server error interno')
		}
	},
	sendEmailXOAuth: async (data) => {
		try {
			const codVerificacion = new Date().getMilliseconds()
			const transporter = nodemailer.createTransport(email)
			const mailOptions = {
				from: `"Electorpro" <admin@electorpro.com.pa>`,
				to: data.usr_email,
				subject: `Validar email registro de app Electorpro: ${data.usr_nameComplete}`,
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
																<td width="100%" style="background:url(https://panamatoolkitnodejs.syspotec.co:8182/imgs/electorproBackground.png) no-repeat; height: 64px; background-size: contain;text-align: center;">    
																	<span style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:19px;line-height:32px;color:white;">
																		Electorpro
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
																	<div><strong>Electorpro</strong></div>
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
																<td style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:11px;color:#aaaaaa;line-height:16px">Este mensaje se envió a <a href="mailto:${data.usr_email}" style="color:#3b5998;text-decoration:none" target="_blank">${data.usr_email}</a>.<br>Electorpro
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
			log4js.error(`[action: email sendEmail][msg: ${e.message}][file:${__filename}]`)
			throw new Error('Server error interno')
		}
	},
}
